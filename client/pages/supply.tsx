import React, {useEffect} from 'react';
import SupplyContainer from "../containers/Supply";
import {useRecoilState} from "recoil";
import {userState} from "../atoms/User";
import {useRouter} from "next/router";

const Supply = () => {
    const [user] = useRecoilState(userState);
    const router = useRouter();
    useEffect(()=>{
        user?.role !== "supplier" && setTimeout(() => router.push("/products"),150);
    },[user?.role])
    return <SupplyContainer/>
};

export default Supply;