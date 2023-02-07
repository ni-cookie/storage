import React from 'react';
import {Buttons, ItemContainer} from "./styles";
import {ProductClass} from "../../Classes/Product";
import {OwnerClass} from "../../Classes/User/Owner";
import Button from "@mui/material/Button";

type Props = {
    product:ProductClass,
    owner:OwnerClass
}

const OfferedProduct:React.FC<Props> = ({product,owner}) => {
    return <ItemContainer>
        <p>name: {product.name}</p>
        <p>price: {product.price}</p>
        <p>amount: {product.amount}</p>
        <p>detailed information: {product.detailedInformation}</p>
        <Buttons>
            <Button sx={{backgroundColor:"green" ,color:"white" ,":hover":{color:"black"}}} onClick={() => owner.acceptProduct(owner._id,product._id,product.amount)}>Accept</Button>
            <Button sx={{backgroundColor:"red" ,color:"white" ,":hover":{color:"black"}}} onClick={() => owner.declineProduct(owner._id,product._id,product.amount)}>Decline</Button>
        </Buttons>
    </ItemContainer>
};

export default OfferedProduct;