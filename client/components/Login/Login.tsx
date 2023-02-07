import React, {useEffect} from 'react';
import {Container} from "./styles";
import {fields, useLogin} from "../../hooks/auth";
import {useRouter} from "next/router";
import Button from "@mui/material/Button";

const LoginComponent = () => {
    const {onConfirm,success,handleChange,data} = useLogin();
    const router = useRouter();
    useEffect(()=>{
       success && router.push("/")
    },[success])

    return <Container>
        <input placeholder={"login"} value={data.login} onChange={handleChange(fields.login)}/>
        <input placeholder={"password"} value={data.password} onChange={handleChange(fields.password)}/>
        <Button onClick={onConfirm}>Confirm</Button>
    </Container>
};

export default LoginComponent;