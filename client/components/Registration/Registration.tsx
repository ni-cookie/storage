import React, {useEffect} from 'react';
import {Container} from "./styles";
import Select from "@mui/material/Select";
import {Button, MenuItem} from "@mui/material";
import {fields, useRegister} from "../../hooks/auth";
import {useRouter} from "next/router";

const Registration = () => {
    const {onConfirm,success,handleChange,registrationData} = useRegister();
    const router = useRouter();

    useEffect(()=>{
       success && router.push("/");
    },[success]);

    return <Container>
        <input value={registrationData.login} placeholder={"login"} onChange={handleChange(fields.login)}/>
        <input value={registrationData.password} placeholder={"password"} type={"password"} onChange={ handleChange(fields.password)}/>
        <Select defaultValue={registrationData.role} onChange={handleChange(fields.role)}>
            <MenuItem value={"supplier"}>supplier</MenuItem>
            <MenuItem value={"buyer"}>buyer</MenuItem>
            <MenuItem value={"owner"}>owner</MenuItem>
        </Select>
        <Button onClick={onConfirm}>confirm</Button>
    </Container>

};

export default Registration;