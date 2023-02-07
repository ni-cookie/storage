import React from 'react';
import {Container} from "./styles";
import {DocumentClass} from "../../Classes/Document/Document";
import Document from "./Document";
import { UserClass } from '../../Classes/User/User';
type Props = {
    documents:DocumentClass[],
    user:UserClass
}

const DocumentsComponent:React.FC<Props> = ({documents,user}) => {
    return <Container>
        {documents.map(doc => <Document key={doc._id} user={user} doc={doc}/>)}
        {!documents.length && <h1>NO DOCUMENTS</h1>}
    </Container>
};

export default DocumentsComponent;