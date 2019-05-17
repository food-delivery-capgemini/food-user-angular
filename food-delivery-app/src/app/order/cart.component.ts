import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { Router } from '@angular/router';
import { CartService } from './cart/cart.service';

@Component({
    templateUrl:"./cart.component.html"  
})
export class CartComponent implements OnInit{
    cart: Cart;

    constructor(private cartService: CartService, private router: Router) { }

    ngOnInit() {
       
        // If cart is not in sessionStorage, we will fetch it from database.
        if(sessionStorage.getItem("myCart") == null) {

            if(sessionStorage.getItem("user") == null) {
                alert("Please login...");

                this.router.navigate(["/customer/login"]);
            }
            else {
                let customer = JSON.parse(sessionStorage.getItem("user"));
                console.log(customer);
                this.cartService.findCartByEmail(customer.email).subscribe((data) => {
                    console.log(data);
                    this.cart = data;
                   
                    sessionStorage.setItem("mycart", JSON.stringify(data));
                })                
            }              
        
    }
        else {
            this.cart = JSON.parse(sessionStorage.getItem("myCart"));
            this.calculateTotal();

        }
    }

    calculateTotal() {
         this.cart.totalAmount = 0;
        for(let item of this.cart.items) {
            this.cart.totalAmount = this.cart.totalAmount + (item.dish.dishPrice * item.quantity);

        }
        sessionStorage.setItem("myCart", JSON.stringify(this.cart));
    }

    removeFromCart(i) {
        console.log(i);
        this.cart = JSON.parse(sessionStorage.getItem("myCart"));
        this.cart.items.splice(i, 1);     
        this.calculateTotal();
    }
}