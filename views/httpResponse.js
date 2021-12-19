class HttpResponse {
    constructor(message , container){
        this.status = 0
        this.error = false
        this.message = message
        if (container) {
            this.result = container
        }
    }
}
module.exports = HttpResponse;