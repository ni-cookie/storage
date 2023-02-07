import React, {useEffect, useState} from 'react';
import {useSetRecoilState} from "recoil";
import {userState} from "../atoms/User";
import {useGetMe} from "../hooks/auth";

type Props = {
    children:React.ReactNode
}

const UserProvider:React.FC<Props> = ({children}) => {
    const [loading,setLoading] = useState(true);
    const setUser = useSetRecoilState(userState);
    const {getMe} = useGetMe();

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await getMe();
                setUser(res);
                setLoading(false);

            }catch (err) {
                setLoading(false);
            }
        }
        fetch();
    },[]);

    if(loading) return <h1>Loading...</h1>
    return <>
        {children}
    </>
};

export default UserProvider;