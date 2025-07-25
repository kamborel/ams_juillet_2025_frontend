export interface Provider{
    id:number,
    name:string,
    email:string,
    address:string
}

export interface Article{
    id:number,
    libelle:string,
    price:number,
    provider:Provider
}