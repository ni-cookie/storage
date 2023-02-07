import DocumentModel from "../models/Document.js";
import ProductModel from "../models/Product.js";
import UserModel from "../models/User.js";

export class DocumentController {
    async getAll (req,res) {
        try{
            const all = await DocumentModel.find();
            res.json(all);
        }catch (err){
            console.log(err);
            res.status(500).json({
                message:"Не удалось вывести все products"
            });
        }
    };


    async getOne (req,res) {
        try{
            const id = req.params.id;
            await DocumentModel.findOneAndUpdate(
                {
                    _id:id,
                },
                {
                    returnDocument:'after',
                },
                (err,doc)=>{
                    if(err){
                        console.log(err);
                        return res.status(500).json({
                            message:'Не удалось 1найти product'
                        });
                    }
                    if(!doc){
                        return res.status(404).json({
                            message:'Не удалось 2найти product'
                        });
                    }
                    res.json(doc);
                }
            );
        }catch (err){
            console.log(err);
            res.status(500).json({
                message:"Не удалось 3найти product"
            });
        }
    };

    async remove (req,res) {
        try{
            const id = req.params.id;
            await DocumentModel.findOneAndDelete(
                {
                    _id:id,
                },
                (err,doc)=>{
                    if(err){
                        console.log(err);
                        return res.status(500).json({
                            message:'Не удалось удалить product'
                        });
                    }
                    if(!doc){
                        console.log("doc: ",doc);
                        return res.status(404).json({
                            message:'product не найдена'
                        });
                    }
                    res.json({
                        success:true,
                    });
                }
            );
        }catch (err){
            console.log(err);
            res.status(500).json({
                message:"Не удалось удалить product"
            });
        }
    };


    async create (req,res) {
        try{
            const buyer = await UserModel.findById(req.body.buyerId);
            const buyerName = buyer.login;

            const product = await ProductModel.findById(req.body.productId);
            const productName = product.name;
            let content = "";
            if(req.body.type === "receiptDocument") {
                content = buyerName + " bought " + req.body.amount.toString() + " " + productName;
            }
            if(req.body.type === "sourceDocumentAccepted") {
                content = buyerName + " accepted " + req.body.amount.toString() + " " + productName;
            }
            if(req.body.type === "receiptDocumentDeclined") {
                content = buyerName + " declined " + req.body.amount.toString() + " " + productName;
            }

            const doc = await new DocumentModel({
                type: req.body.type,
                content: content,
                buyerId: req.body.buyerId,
                productId: req.body.productId,
                amount:req.body.amount
            });

            const one = await doc.save();
            res.json(one);
        }catch (err){
            console.log(err);
            res.status(500).json({
                message:"Не удалось создать пост"
            });
        }
    };

    async update (req,res) {
        try{
            const id =  req.params.id;
            await DocumentModel.updateOne({
                    _id:id
                },
                {
                    type: req.body.type,
                    content: req.body.content,
                })
            res.json({
                success:true,
            })
        }catch(err){
            console.log(err);
            res.status(500).json({
                message:"Не удалось обновить статью"
            });
        }
    };

    async getDocumentsByUser (req,res) {
        try{
            const documents = await DocumentModel.find({buyerId:req.params.userId});
            res.json(documents);
        }catch(err){
            res.status(500).json({
                message:"Не удалось найти посты этого пользователя"
            })
        }
    }
}
