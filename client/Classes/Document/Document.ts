export class DocumentClass {
    protected _type;
    protected _content;
    protected id;
    protected _buyerId;
    protected _productId;
    protected _amount;
    protected _isReturned

    constructor(type:string,content:string,id:string,buyerId:string,productId:string,amount:number,isReturned:boolean) {
        this._content = content;
        this._type = type;
        this.id = id;
        this._buyerId = buyerId;
        this._productId = productId;
        this._amount = amount;
        this._isReturned = isReturned
    }

    public get _id(){
        return this.id;
    }
    public get type(){
        return this._type;
    }
    public get content(){
        return this._content;
    }
    public get buyerId() {
        return this._buyerId;
    }
    public get productId() {
        return this._productId;
    }
    public get amount() {
        return this._amount;
    }
    public get isReturned() {
        return this._isReturned;
    }

    public set _id(id:string){
        this.id = id;
    }
    public set content(content:string){
        this._content = content;
    }
    public set type(type:string){
        this._type = type;
    }
    public set buyerId(buyerId:string) {
        this._buyerId = buyerId;
    }
    public set productId(productId:string) {
        this._productId = productId;
    }
    public set amount(amount:number) {
        this._amount = amount;
    }
    public set isReturned(isReturned:boolean) {
       this._isReturned = isReturned;
    }

}