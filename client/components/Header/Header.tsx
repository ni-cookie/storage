import React from 'react';
import {Buttons, Container, Logo, Menu, UserData} from "./styles";
import NextLink from "next/link";
import {UserClass} from "../../Classes/User/User";

type HeaderProps = {
    userData:UserClass,
    logOut:() => void
}

const HeaderComponent:React.FC<HeaderProps> = ({userData,logOut}) => {
    return <Container>
        <Logo href={"/products"}>Storage</Logo>
        <Menu>
            <div><NextLink href={"/products"}>Products</NextLink></div>
            {userData?.role === "supplier" && <div><NextLink href={"/supply"}>Supply</NextLink></div>}
            {userData?.role === "owner" && <div><NextLink href={"/offered-products"}>Offered Products</NextLink></div>}
            {!!userData?.role && <div><NextLink href={"/documents"}>Documents</NextLink></div>}
        </Menu>
        {!userData?.login ?
        <Buttons>
            <NextLink href={"/registration"}>Register</NextLink>
            <NextLink href={"/login"}>Login</NextLink>
        </Buttons> :
        <Buttons>
            <UserData>
                <p>{userData.login}</p>
                <p>{userData.role}</p>
            </UserData>
            <button onClick={logOut}>LOG OUT</button>
        </Buttons>}
    </Container>
};

export default HeaderComponent;