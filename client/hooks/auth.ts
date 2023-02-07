import axios,{getConfig} from "../helpers/axios";
import {useState} from "react";
import {loginDataType, registerDataType} from "../types";

import Cookies from "js-cookie";
import {SelectChangeEvent} from "@mui/material";
import {useRouter} from "next/router";
import {useSetRecoilState} from "recoil";
import {userState} from "../atoms/User";
import {UserClass} from "../Classes/User/User";

export const setToken = (token:string) =>{
    Cookies.set("token",token);
}
export const getToken = () =>{
    return Cookies.get("token");
}

export const deleteTokenCookie = async () =>{
    const route = useRouter();
    Cookies.remove("token");
    await route.push("/products");
}

export enum fields {
    login = "login",
    password = "password",
    role = "role"
}

export const useLogin = () => {
    const setUser = useSetRecoilState(userState);
    const [success,setSuccess] = useState(false);
    const [data,setData] = useState<loginDataType>({password:"",login:""});
    const handleChange = (field: fields) => (e:React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({...prev, [field]: e?.target?.value}));
    }
    const onConfirm = async () =>{
        await axios.post('/auth/login',data).then(res => {
            setSuccess(res.status === 200);
            if(res.status === 200){
                setToken(res.data.token);
                const user = new UserClass(res.data.login,res.data.role,res.data._id);
                setUser(user);
            }
        });
    }
    return {success, onConfirm, handleChange,data}
}

export const useGetMe = () =>{
    const getMe = async () =>{
        if(!getToken()) return;
        try{
            const res = await axios.get("/auth/me",getConfig());
            return res?.data;
        } catch (err){
            console.log("err",err)
        }
    }

    return {getMe};
}

export const useLogOut = () => {
    const route = useRouter();
    const setUser = useSetRecoilState(userState);


    const logOut = async () =>{
        Cookies.remove("token");
        await route.push("/");
        const user = new UserClass("","","");
        setUser(user);
    }
    return {logOut};

}

export const useRegister = () =>{
    const [success,setSuccess] = useState(false);
    const setUser = useSetRecoilState(userState);

    const [registrationData,setData] = useState<registerDataType>({password:"",login:"",role:"buyer"});

    const handleChange = (field: fields) => (e: SelectChangeEvent | React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({...prev, [field]: e?.target?.value}));
    }

    const onConfirm = async () =>{
        console.log(registrationData);
        await axios.post('/auth/register',registrationData).then(res => {
            setSuccess(res.status === 200);
            if(res.status === 200) {
                setToken(res.data.token);

                const user = new UserClass(res.data.login,res.data.role,res.data._id);
                setUser(user);
            }
        });
    }

    return {success,handleChange,onConfirm,registrationData};
}