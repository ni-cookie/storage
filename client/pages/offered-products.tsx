import React, {useEffect} from 'react';
import OfferedProductsContainer from "../containers/OfferedProducts";
import {useRecoilState} from "recoil";
import {userState} from "../atoms/User";
import {useRouter} from "next/router";

const OfferedProducts = () => {
    const [user] = useRecoilState(userState);
    const router = useRouter();
    useEffect(()=>{
        user?.role !== "owner" && setTimeout(() => router.push("/products"),100);
    },[user?.role])
    return <OfferedProductsContainer/>
};

export default OfferedProducts;