import ProductModel from "../models/Product.js";
import DocumentModel from "../models/Document.js";
export class ProductController {
    async getAll (req,res) {
        try{
            const all = await ProductModel.find();
            res.json(all);
        }catch (err){
            console.log(err);
            res.status(500).json({
                message:"Не удалось вывести все products"
            });
        }
    };

    async getAllAccepted (req,res) {
        try{
            const all = await ProductModel.find({isAccepted:true});
            res.json(all);
        }catch (err){
            console.log(err);
            res.status(500).json({
                message:"Не удалось вывести все products"
            });
        }
    };

    async getAllNotAccepted (req,res) {
        try{
            const all = await ProductModel.find({isAccepted:false});
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
            await ProductModel.findOneAndUpdate(
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

    async decreaseAmount (req,res) {
        try{
            const id = req.params.id;
            const prev = await ProductModel.findById(id);
            const newAmount = +prev.amount - +req.body.amount;
            console.log("err",id,"err",req.body.amount)
            if(+newAmount < 0) {
                return res.status(400).json({
                    message: "Нет в наличии"
                });
            }
            await ProductModel.updateOne({_id:id},{amount:newAmount});
            return res.status(200).json({
                message:'success'
            });
        }catch (err){
            return res.status(500).json({
                message:'Не удалось уменьшить кол-во товара'
            });
        }
    };

    async remove (req,res) {
        try{
            const id = req.params.id;
            await ProductModel.findOneAndDelete(
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
            if(req.body.id){
                const id = req.body.id;
                const prev = await ProductModel.findById(id);
                const newAmount = +prev.amount + +req.body.amount;
                await ProductModel.updateOne({_id:req.body.id},{amount:newAmount});
                return;
            }
            const doc = await new ProductModel({
                name: req.body.name,
                price: req.body.price,
                amount: req.body.amount,
                detailedInformation: req.body.detailedInformation,
                supplier: req.body.supplierId,
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


    async acceptProduct (req,res) {
        try{
            const id =  req.params.id;
            await ProductModel.updateOne({
                    _id:id
                },
                {
                    isAccepted:true
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
    }

    async declineProduct(req,res) {
        try{
            const id =  req.params.id;
            await ProductModel.updateOne({
                    _id:id
                },
                {
                    isAccepted:false
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
    }

    async returnProduct(req,res) {
        try{
            const product = await ProductModel.findById(req.body.productId);
            const prevAmount = product.amount;

            await ProductModel.findOneAndUpdate({_id:req.body.productId},{amount:prevAmount + req.body.amount});
            await DocumentModel.findOneAndUpdate({_id:req.body.documentId},{isReturned:true});
            res.status(200).json({
                message:"success"
            })
        }catch(err){
            console.log(err);
        }
    }
}