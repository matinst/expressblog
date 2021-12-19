const {StatusCodes} = require('http-status-codes')
const ErrorCode = {
    INTERNAL_SERVER_ERROR : 1,
    USER_EXIST : 2,
    USER_NOT_FOUND : 3
}

function getError (errorCode) {
    switch (errorCode){
        case ErrorCode.INTERNAL_SERVER_ERROR:
            return [StatusCodes.INTERNAL_SERVER_ERROR , 'Oops ! Something went Wrong']

        case ErrorCode.USER_EXIST:
            return [StatusCodes.CONFLICT , 'This User already exist.']

        case ErrorCode.USER_NOT_FOUND:
            return [StatusCodes.NOT_FOUND , 'User Not Found , Please Enter Correct Your Student Number of']
    
        default:
         return [StatusCodes.INTERNAL_SERVER_ERROR , 'Oops ! Something went Wrong']

    }
}

module.exports = {
    ErrorCode,
    getError
}