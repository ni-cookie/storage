import {DocumentClass} from "./Document";
import axios from "../../helpers/axios";

export class SourceDocumentClass extends DocumentClass {
    constructor(type:string,content:string,id:string,buyerId:string,productId:string,amount:number) {
        super(type,content,id,buyerId,productId,amount,false);
    }

    public async create(buyerId:string,productId:string,amount:number) {
        try{
            await axios.post("/createDocument",{type:this._type,buyerId:buyerId,productId:productId,amount:amount});
        }catch(err){
            console.log(err);
        }
    }
}