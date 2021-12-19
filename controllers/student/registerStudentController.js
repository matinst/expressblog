const Student = require('../../models/student')
const {ErrorCode} = require('../../errors/errorCode')
const HttpError = require('../../errors/httpError')
const HttpResponse = require('../../views/httpResponse')
class RegisterStudentController{
    static async handle(req,res,next){


        const {studentNumber , studentNationalCode , studentName , studentFamily , studentField} = req.body
            
        try {
        

            const findStudent = await Student.findOne({
                studentNumber : studentNumber
            })
            if(findStudent){
                throw new HttpError(ErrorCode.USER_EXIST)
            }
            

            await Student.create({
                studentNumber : studentNumber,
                studentNationalCode : studentNationalCode,
                studentName : studentName,
                studentFamily : studentFamily,
                studentField : studentField
            })

            res.json(new HttpResponse('You Have Registed Successfully.'))

        } 
        catch (err) {
            next(err)   
        }

    }
}

module.exports = RegisterStudentController