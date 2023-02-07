export type loginDataType = {
    login:string|undefined,
    password:string|undefined
}

export type registerDataType = {
    login:string|undefined,
    password:string|undefined,
    role:string|undefined
}

export type suppliedItemType = {
    name:string,
    price:number,
    amount:number,
    detailedInformation:string,
    supplierId:string
}