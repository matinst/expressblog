const Student = require('../../models/student')
const {ErrorCode} = require('../../errors/errorCode')
const HttpError = require('../../errors/httpError')
const HttpResponse = require('../../views/httpResponse')


class loginStudentController{
    static async handle(req,res,next) {


        const {studentNumber , studentNationalCode} = req.body

        try {
            const findStudent = await Student.findOne({
                studentNationalCode : studentNationalCode,
                studentNumber : studentNumber
            })
            if(!findStudent){
                throw new HttpError(ErrorCode.USER_NOT_FOUND)
            }

            
        }
        catch (err) {
            next(err)   
        }


    }
}