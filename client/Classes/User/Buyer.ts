import {UserClass} from "./User";
import axios from "../../helpers/axios";
import {ReceiptDocumentClass} from "../Document/ReceiptDocument";

export class BuyerClass extends UserClass {
    public async buy (buyerId:string,productId:string,amount:number) {
        const doc = new ReceiptDocumentClass("receiptDocument","","",buyerId,productId,amount,false);
        try{
            await axios.patch("/decreaseProductAmount/"+productId, {amount});
            await doc.create(buyerId,productId,amount);
        }catch(err){
            console.log("err",err);
        }
    }
    public async returnProducts(productId:string,documentId:string,amount:number) {
        try{
            await axios.patch('/returnProducts',{productId:productId,documentId:documentId,amount:amount});
        }catch(err){
            console.log(err);
        }
    }
}