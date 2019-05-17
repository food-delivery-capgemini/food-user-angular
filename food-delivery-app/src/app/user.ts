
export class Address{
    addressLine:String;
    city:String;
    state:String;
    postalCode:number;
}

export class Users{
    name:string;
    gender:string;
    password:string;
    contact:number;
    email:string;
    address:Address;
    date:Date;
}