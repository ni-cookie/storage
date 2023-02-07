import React from 'react';
import HeaderComponent from "../components/Header/Header";
import {useRecoilState} from "recoil";
import {userState} from "../atoms/User";
import {useLogOut} from "../hooks/auth";

const Header = () => {
    const [user] = useRecoilState(userState);
    const {logOut} = useLogOut();
    return <HeaderComponent logOut={logOut} userData={user}/>
};

export default Header;