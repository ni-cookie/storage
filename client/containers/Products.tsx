import React from 'react';
import ProductsComponent from "../components/Products/Products";
import {ProductClass} from "../Classes/Product";
import {useFetchAcceptedProducts} from "../hooks/useFetch";
import {useRecoilState} from "recoil";
import {userState} from "../atoms/User";
import {BuyerClass} from "../Classes/User/Buyer";
import {loadingState} from "../atoms/Loading";

export type ProductsProps = {
    products:ProductClass[],
    buyer:BuyerClass,
    fetchProducts:() => void,
    isAuthed:boolean
}

// export const getStaticProps:GetStaticProps = async () =>{
//     try{
//         const res = await axios.get("/g etAllProducts");
//         const products = res.data as ProductClass[];
//         return {
//             props: { products:products }
//         }
//     } catch (err){console.log(err);}
// }
//:React.FC<ProductsProps>

const ProductsContainer = () => {
    const {products,fetchAcceptedProducts} = useFetchAcceptedProducts();
    const [user] = useRecoilState(userState);

    const buyer = new BuyerClass(user?.login,user?.role,user?._id);
    return <ProductsComponent isAuthed={!!user?.login} fetchProducts={fetchAcceptedProducts} buyer={buyer} products={products}/>
};

export default ProductsContainer;