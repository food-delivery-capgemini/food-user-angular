import { Cart } from '../order/cart';


export class Orders{

    orderId:number;
    cart:Cart;
    status:string;
    email:string;
    
}

// export class Address{
//     addressLine:string;
//     city:string;
// }

// export class Users{
//     name:string;
//     gender:string;
//     password:string;
//     contact:number;
//     email:string;
//     address:Address;
//     date:Date;
// }

export class Feedback{
    rating:number;
    comments:string;
    email:string;
    orderId:number;

}