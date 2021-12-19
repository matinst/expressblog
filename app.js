const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const { ErrorCode } = require('./errors/errorCode');
const HttpError = require('./errors/httpError');
const apiRouter = require('./routes')
const swaggerDocument = require('./utils/swagger.json')
const cors = require('cors');

require('dotenv').config()

class Application {
    constructor(){
        this.app = express();

        this.setupServer()
        this.connetToDatabase()
        this.initiateConfiguration()
        this.initiateRouters()
        this.errorHandlerMiddleware()
    }

    setupServer(){
        this.app.listen(+process.env.PORT,()=>{
            console.log(`App is Running on port ${process.env.PORT} ... `);
        })
    }

    connetToDatabase() {
        mongoose.connect(process.env.DATABASE_URL,(err)=>{
            if (err) {
                throw err
            }
            console.log('Connected to MongoDB');
        })
    }

    initiateConfiguration(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extented : false}))
        this.app.use(cors({origin: '*'}))
    }
    initiateRouters(){
        this.app.get('/ping',(req, res)=>{
            res.send({
                success: true,
            })
        })
        this.app.use('/api-docs',swaggerUi.serve , swaggerUi.setup(swaggerDocument))

        this.app.use('/api',apiRouter)
    }

    errorHandlerMiddleware(){
        this.app.use((err,req,res,next) => {
            console.log(err);
            
            if (!(err instanceof HttpError)) {
                err = new HttpError(ErrorCode.INTERNAL_SERVER_ERROR)               
            }
            res.status(err.getStatus()).json(err.toJSON());
        })
    }
}

module.exports = Application 