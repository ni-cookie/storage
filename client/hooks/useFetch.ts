import axios from "../helpers/axios";
import {ProductClass} from "../Classes/Product";
import {useEffect, useState} from "react";
import {DocumentClass} from "../Classes/Document/Document";

export const useFetchAcceptedProducts = () =>{
    const [products,setProducts] = useState<ProductClass[]>([]);

    const fetchAcceptedProducts = async () => {
        try{
            const res = await axios.get('/getAllAcceptedProducts');
            setProducts(res.data as ProductClass[]);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        fetchAcceptedProducts();
    },[])
    return {products,fetchAcceptedProducts};
};

export const useFetchNotAcceptedProducts = () =>{
    const [products,setProducts] = useState<ProductClass[]>([]);
    const fetchNotAcceptedProducts = async () => {
        try{
            const res = await axios.get('/getAllNotAcceptedProducts');
            setProducts(res.data as ProductClass[]);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        fetchNotAcceptedProducts();
    },[])
    return {products,fetchNotAcceptedProducts};
}

export const useFetchDocuments = (userId:string) =>{
    const [documents,setDocuments] = useState<DocumentClass[]>([]);

    const fetchDocuments = async () => {
        try{
            const res = await axios.get('/getDocumentsByUser/'+userId);
            setDocuments(res.data as DocumentClass[]);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        fetchDocuments();
    },[])

    return {documents,fetchDocuments};
}