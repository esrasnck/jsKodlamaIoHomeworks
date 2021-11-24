import DataResult from "./dataResult.js"

export default class SuccessDataResult extends DataResult{
    constructor(message,data){
        super(true,message,data)
    }
}