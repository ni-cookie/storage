import {BuyerClass} from "./Buyer";
import axios from "../../helpers/axios";

export class SupplierClass extends BuyerClass {
    public async supply(name:string,price:number,amount:number,detailedInformation:string,supplierId:string) {
        try{
            await axios.post("/createProduct",{name,price,amount,detailedInformation,supplierId});
        }catch(err){
            console.log("creation err",err);
        }
    }
}