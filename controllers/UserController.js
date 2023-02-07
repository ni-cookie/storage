import {validationResult} from "express-validator";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";

export class UserController {
    async register (req,res) {
        try
        {const errors =  validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json(errors.array());
            }
            if(await UserModel.findOne({login: req.body.login})){
                return res.status(400).json({
                    message:"Этот email уже используется",
                });
            }
            const password = req.body.password;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password,salt)

            const _doc = new UserModel({
                login:req.body.login,
                role:req.body.role,
                passwordHash:hash,
            });
            const user = await _doc.save();

            const token = jwt.sign(
                {
                    _id:user.id,
                },
                'secret123',
                {
                    expiresIn:'30d',
                },
            );
            const {passwordHash,...userData} = user._doc;
            res.json({...userData,token});

        }catch(err){
            console.log(err);
            res.status(500).json({
                message:"Не удалось 1 зарегистрироваться",
            });
        }
    };

    async login (req,res) {
        try {
            const user = await UserModel.findOne({login: req.body.login});
            if(!user){
                return res.status(404).json({
                    message:'Пользователь не найден.',
                });
            }

            const isValidPassword = await bcrypt.compare(req.body.password,user._doc.passwordHash);
            if(!isValidPassword){
                return res.status(404).json({
                    message:'Неверный логин или пароль.',
                });
            }

            const token = jwt.sign(
                {
                    _id:user.id,
                },
                'secret123',
                {
                    expiresIn:'30d',
                },
            );
            const {passwordHash,...userData} = user._doc;
            res.json({...userData,token});
        }catch (err){
            console.log(err);
            res.status(500).json({
                message:"Не удалось авторизоваться.",
            });
        }

    };

    async getMe (req,res) {
        try{
            const user = await UserModel.findById(req.userId);
            if(!user){
                return res.status(404).json({
                    message:'Пользователь не найден.'
                })
            }
            const {passwordHash,...userData} = user._doc;
            res.json(userData);
        }catch(err){
            console.log(err);
            res.status(500).json({
                message:"Нет доступа.",
            });
        }
    };

}



