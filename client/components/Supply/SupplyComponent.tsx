import React from 'react';
import {Container} from "./styles";
import {useFormSupply,fields} from "../../hooks/useForm";
import {Input} from "../common/Input";
import Button from "@mui/material/Button";

const SupplyComponent = () => {
    const {data,onConfirm,onHandleChange} = useFormSupply();

    return <Container>
        <Input placeholder={"name"} value={data.name} onChange={onHandleChange(fields.name)}/>
        <Input placeholder={"price"} type={"number"} value={data.price} onChange={onHandleChange(fields.price)}/>
        <Input placeholder={"amount"} type={"number"} value={data.amount} onChange={onHandleChange(fields.amount)}/>
        <Input placeholder={"detailed information"} value={data.detailedInformation} onChange={onHandleChange(fields.detailedInformation)}/>
        <Button onClick={onConfirm}>Confirm</Button>
    </Container>
};

export default SupplyComponent;