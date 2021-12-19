const { getError } = require("./errorCode");

class HttpError extends Error {
    constructor(errorCode){
        super();

        this.errorCode = errorCode;
        this.errorMessage = getError(errorCode)[1];

    }

    getStatus(){
        return getError(this.errorCode)[0]
    }

    toJSON(){
        return {
            status: this.errorCode,
            error : true,
            result : {
                message: this.errorMessage
            }
        }
    }
}


module.exports = HttpError;