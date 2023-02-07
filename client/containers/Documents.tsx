import React from 'react';
import DocumentsComponent from "../components/Documents/Documents";
import {useFetchDocuments} from "../hooks/useFetch";
import {useRecoilState} from "recoil";
import {userState} from "../atoms/User";

const DocumentsContainer = () => {
    const [user] = useRecoilState(userState);

    const {documents} = useFetchDocuments(user?._id);

    return <DocumentsComponent user={user} documents={documents}/>
};

export default DocumentsContainer;