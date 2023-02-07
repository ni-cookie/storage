import React from 'react';
import {ItemContainer} from "./styles";
import {DocumentClass} from "../../Classes/Document/Document";
import Button from '@mui/material/Button';
import {UserClass} from "../../Classes/User/User";
import {BuyerClass} from "../../Classes/User/Buyer";

type Props = {
    doc:DocumentClass,
    user:UserClass
}

const Document:React.FC<Props> = ({doc,user}) => {
    const returnProduct = async () => {
        await buyer.returnProducts(doc.productId,doc._id,doc.amount);
    }
    console.log(doc.isReturned);
    const buyer = new BuyerClass(user.login,user.role,user._id);
    return <ItemContainer>
        <p>content: {doc.content}</p>
        <p>content: {doc.type}</p>
        {(doc.type !== "sourceDocumentAccepted" && doc.type !== "sourceDocumentDeclined") && <p>{!doc.isReturned ? "You can return this product" : "You already returned this product"}</p>}
        {(doc.type !== "sourceDocumentAccepted" && doc.type !== "sourceDocumentDeclined") && <Button onClick={returnProduct}>RETURN</Button>}
    </ItemContainer>
};

export default Document;