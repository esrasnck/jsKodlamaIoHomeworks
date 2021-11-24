import DataResult from "./dataResult.js";

export default class ErrorDataResult extends DataResult{
    constructor(message,data){
        super(false,message,data)
    }
}