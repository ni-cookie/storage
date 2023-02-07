import {DocumentClass} from "./Document";
import axios from "../../helpers/axios";

export class ReceiptDocumentClass extends DocumentClass {
    constructor(type:string,content:string,id:string,buyerId:string,productId:string,amount:number,isReturn:boolean) {
        super(type,content,id,buyerId,productId,amount,isReturn);
    }

    public async create(buyerId:string,productId:string,amount:number) {
        try{
            await axios.post("/createDocument",{type:this._type,buyerId:buyerId,productId:productId,amount:amount});
        }catch(err){
            console.log(err);
        }
    }
}