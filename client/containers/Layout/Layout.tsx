import React from 'react';
import {Container, Main} from "./styles";
import Header from "../Header";

type Props = {
    children:React.ReactNode
}

const Layout:React.FC<Props> = ({children}) => {
    return <Container>
        <Header/>
        <Main>
            {children}
        </Main>
    </Container>
};

export default Layout;