import React, {useEffect} from 'react';
import DocumentsContainer from "../containers/Documents";
import {useRecoilState} from "recoil";
import {userState} from "../atoms/User";
import {useRouter} from "next/router";

const Documents = () => {
    const [user] = useRecoilState(userState);
    const router = useRouter();
    console.log(user);
    useEffect(()=>{
        !user?.role && setTimeout(() => router.push("/products"),150);
    },[user?.role])
    return <DocumentsContainer/>
};

export default Documents;