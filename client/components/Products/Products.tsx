import React from 'react';
import {Container} from "./styles";
import Product from "./Product";
import {ProductsProps} from "../../containers/Products";

const ProductsComponent:React.FC<ProductsProps> = ({products,buyer,fetchProducts,isAuthed}) => {
    return <Container>
        {products?.map(product => <Product isAuthed={isAuthed} fetchProducts={fetchProducts} buyer={buyer} key={product._id} product={product}/>)}
        {!products.length && <h1>NO PRODUCTS</h1>}
    </Container>
};

export default ProductsComponent;