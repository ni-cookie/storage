import React from 'react';
import OfferedProductsComponent from "../components/OfferedProducts/OfferedProducts";
import {useFetchNotAcceptedProducts} from "../hooks/useFetch";
import {useRecoilState} from "recoil";
import {userState} from "../atoms/User";
import {OwnerClass} from "../Classes/User/Owner";
import {loadingState} from "../atoms/Loading";

const OfferedProductsContainer = () => {
    const {products,fetchNotAcceptedProducts} = useFetchNotAcceptedProducts();
    const [user] = useRecoilState(userState);


    const owner = new OwnerClass(user?.login,user?.role,user?._id);
    return <OfferedProductsComponent owner={owner} products={products}/>
};

export default OfferedProductsContainer;