import {useState} from "react";
import {suppliedItemType} from "../types";
import {useRecoilState} from "recoil";
import {userState} from "../atoms/User";
import {SupplierClass} from "../Classes/User/Supplier";

export const useFormBuy = () =>{
    const [amount,setAmount] = useState<number>(0);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(+e.target.value > 0)setAmount(+e.target.value);
        else setAmount(-e.target.value);
    }

    return {amount,onChange};
}

export enum fields {
    name = "name",
    price = "price",
    amount = "amount",
    detailedInformation = "detailedInformation"
}

export const useFormSupply = () =>{
    const [user] = useRecoilState(userState);
    const [data,setData] = useState<suppliedItemType>({name:"",price:0,amount:0,detailedInformation:"",supplierId:user._id});
    const supplier = new SupplierClass(user.login,user.role,user._id);

    const onHandleChange = (field:fields) => (e:React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({...prev,[field]:e?.target?.value}));
    }
    const onConfirm = async (e:React.FormEvent) => {
        e.preventDefault();
        await supplier.supply(data.name,data.price,data.amount,data.detailedInformation,data.supplierId);
    }

    return {data,onHandleChange,onConfirm};
}