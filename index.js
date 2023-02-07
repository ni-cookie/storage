import express from 'express';
import mongoose from "mongoose";
import {checkAuth} from "./utils/index.js";
import {ProductController,DocumentController,UserController,} from "./controllers/index.js";
import cors from "cors";

mongoose
    .connect("mongodb+srv://Denis:den0677164955@cluster0.cppu1ku.mongodb.net/test")
    .then(() => console.log("DB ok"))
    .catch((err) => console.log('DB error', err));

const app = express();


app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'))

app.get('/',(req,res) => {
   res.send('H World!');
});

const User = new UserController.UserController();
const Document = new DocumentController.DocumentController();
const Product = new ProductController.ProductController();

app.post('/auth/login',User.login);
app.post('/auth/register',User.register);
app.get('/auth/me',checkAuth,User.getMe);


app.get('/getAllProducts',Product.getAll);
app.get('/getAllAcceptedProducts',Product.getAllAccepted);
app.get('/getAllNotAcceptedProducts',Product.getAllNotAccepted);
app.get('/getProduct/:id',Product.getOne);
app.patch('/decreaseProductAmount/:id',Product.decreaseAmount);
app.delete('/productRemove/:id',Product.remove);
app.post('/createProduct',Product.create);
app.patch('/acceptProduct/:id',Product.acceptProduct);
app.patch('/declineProduct/:id',Product.declineProduct);
app.patch("/returnProducts",Product.returnProduct);

app.get('/getAllDocuments',Document.getAll);
app.get('/getDocument/:id',Document.getOne);
app.get('/getDocumentsByUser/:userId',Document.getDocumentsByUser);
app.delete('/documentRemove/:id',Document.remove);
app.post('/createDocument',Document.create);
app.patch('/updateDocument',Document.update);


app.listen(4444, (err) => {
    if(err){
        return console.log(err);
    }
    console.log('Server OK');
})