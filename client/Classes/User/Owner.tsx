import {UserClass} from "./User";
import axios from "../../helpers/axios";
import {SourceDocumentClass} from "../Document/SourceDocument";

export class OwnerClass extends UserClass {

    public async acceptProduct(buyerId:string,productId:string,amount:number) {
        const doc = new SourceDocumentClass("sourceDocumentAccepted","","",buyerId,productId,amount);
        try{
            await axios.patch("acceptProduct/"+productId);
            await doc.create(buyerId, productId, amount);
        }catch (err){
            console.log("err",err)
        }
    }

    public async declineProduct(buyerId:string,productId:string,amount:number) {
        const doc = new SourceDocumentClass("sourceDocumentDeclined","","",buyerId,productId,amount);
        try{
            await axios.patch("acceptProduct/"+productId);
            await doc.create(buyerId, productId, amount);
        }catch (err){
            console.log("err",err)
        }
    }

}