export class ProductClass {
    private _name;
    private _price;
    private _amount;
    private _detailedInformation;
    private _isAccepted;
    private id;

    constructor(name:string,price:number,amount:number,id:string,detailedInformation:string,isAccepted:boolean) {
        this._name = name;
        this._price = price;
        this._amount = amount;
        this.id = id
        this._detailedInformation = detailedInformation;
        this._isAccepted = isAccepted;
    }

    public get name() {
        return this._name;
    }
    public get price() {
        return this._price;
    }
    public get amount() {
        return this._amount;
    }
    public get _id() {
        return this.id;
    }
    public get detailedInformation() {
        return this._detailedInformation;
    }
    public get isAccepted() {
        return this._isAccepted;
    }


    public set name(name:string){
        this._name = name;
    }
    public set price(price:number){
        this._price = price;
    }
    public set amount(amount:number){
        this._amount = amount;
    }
    public set _id(id:string){
        this.id = id;
    }
    public set detailedInformation(detailedInformation:string) {
        this._detailedInformation = detailedInformation;
    }
    public set isAccepted(isAccepted:boolean) {
        this._isAccepted = isAccepted;
    }
}