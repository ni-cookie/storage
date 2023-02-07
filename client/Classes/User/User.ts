import axios from "../../helpers/axios";

export class UserClass {
    protected _login;
    protected _role;
    protected id;

    constructor(login:string,role:string,_id:string) {
        this._login = login;
        this._role = role;
        this.id = _id;
    }

    public get login () {
        return this._login;
    }
    public get role () {
        return this._role;
    }
    public get _id () {
        return this.id;
    }

    public set login(login:string) {
        this._login = login;
    }
    public set role(role:string) {
        this._role = role;
    }
    public set _id (_id:string) {
        this.id = _id;
    }

    public async returnProducts(productId:string,documentId:string,amount:number) {
        try{
            await axios.patch('/returnProducts',{productId:productId,documentId:documentId,amount:amount});
        }catch(err){
            console.log(err);
        }
    }

    public async a() {
        console.log('a')
    }
}