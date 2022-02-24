class httpError extends Error{
        code:string
    constructor(message:string, errorCode:string) {
        super(message)
        this.code = errorCode
    }
}

export default httpError

