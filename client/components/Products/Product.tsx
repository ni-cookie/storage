import React from 'react';
import {Buttons, ProductContainer} from "./styles";
import {ProductClass} from "../../Classes/Product";
import {BuyerClass} from "../../Classes/User/Buyer";
import {useFormBuy} from "../../hooks/useForm";
import Button from "@mui/material/Button";

type Props = {
    product:ProductClass,
    buyer:BuyerClass,
    fetchProducts:() => void,
    isAuthed:boolean
}

const Product:React.FC<Props> = ({product,buyer,fetchProducts,isAuthed}) => {
    const {amount,onChange} = useFormBuy();
    const onBuy = async () => {
        await buyer.buy(buyer._id,product._id,amount);
        await fetchProducts();
    }
    return <ProductContainer>
        <p>price: {product.price}</p>
        <p>name: {product.name}</p>
        <p>amount: {product.amount}</p>
        {/*<p>{product._id}</p>*/}
        {!!product.amount && <input type={"number"} value={amount} onChange={onChange}/>}
        <Buttons>
            {!!product.amount && !!amount && isAuthed && (amount <= product.amount) && <Button sx={{backgroundColor:"green" ,color:"white" ,":hover":{color:"black",backgroundColor:"green"}}} onClick={onBuy}>BUY {amount}</Button>}
            {(!product.amount || !amount || !isAuthed || amount > product.amount) && <Button disabled={true}>BUY</Button>}
        </Buttons>
    </ProductContainer>
};

export default Product;