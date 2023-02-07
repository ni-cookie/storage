import React from 'react';
import OfferedProduct from "./OfferedProduct";
import {OwnerClass} from "../../Classes/User/Owner";
import {ProductClass} from "../../Classes/Product";
import {Container} from "./styles";

type Props = {
    owner:OwnerClass,
    products:ProductClass[]
}

const OfferedProductsComponent:React.FC<Props> = ({owner,products}) => {
    return <Container>
        {products.map(product => <OfferedProduct key={product._id} product={product} owner={owner}/>)}
        {!products.length && <h1>NO NOT ACCEPTED PRODUCTS</h1>}
    </Container>
};

export default OfferedProductsComponent;