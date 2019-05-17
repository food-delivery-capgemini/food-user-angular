import { Component, OnInit } from '@angular/core';
import { Dish } from './dish';
import { DishService } from './dish.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant';
import { Item } from './item';
import { CartService } from './cart/cart.service';
import { Cart } from './cart';
import { Users } from '../user';

@Component({
    templateUrl: "./dish.component.html"
})
export class DishComponent implements OnInit {

    dishes: Dish[];
    dish: Dish;
    cart: Cart;
    items: Item;
    user1: Users;


    constructor(private dishService: DishService,
        private route: ActivatedRoute,
        private router: Router,
        private cartService: CartService) { }


    ordernow(dishId: number) {
        this.dishService.findDishById(dishId).subscribe((data) => {
            this.dish = data;
            console.log(data);
            console.log(this.dish.dishPrice);
            let quantity = document.getElementById("qty").innerHTML;
            console.log(this.items.quantity);

        })
    }

    ngOnInit() {
        this.cart=new Cart();

        // this.route.paramMap.subscribe((map) => {
        //     let category = map.get("category");
        //     console.log(category);

        this.dishService.findAllDishes().subscribe((data) => {
            this.dishes = data;
            console.log(data);
            // sessionStorage.setItem("mycart", JSON.stringify(cart));
            this.user1 = JSON.parse(sessionStorage.getItem('user'));
            console.log(this.user1);

        })

        // })


    }

    // add() {
    //     alert("hello")
    //     console.log("hii")
    //     console.log(this.dishes[0]);
    //     console.log(this.items.quantity);
    // }

    addToCart(dish) {

        this.cart = JSON.parse(sessionStorage.getItem("myCart"));
        if(this.cart == null) {
            alert("Please login");
            this.router.navigate(["/home"]);
            // navigate to sign page
        }
        else {
            let dishExists = false;
            let index = 0;
            if(this.cart.items.length > 0) {
                for(let item of this.cart.items) {
                    if(item.dish.dishId == dish.dishId) { 
                        this.cart.items[index].quantity = this.cart.items[index].quantity + 1;
                        dishExists = true;
                        alert("Dish already exists. Quantity increased to " + item.quantity);
                    }
                    index = index + 1;
                }
            }
            if(!dishExists) {
                this.cart.items.push(new Item(dish, 1));                
                alert("Dish added successfully");
                
            }
            sessionStorage.setItem("myCart", JSON.stringify(this.cart));
           
            console.log(this.cart);
             
         this.cartService.updateCart(this.cart).subscribe((data) => {
            data=this.cart;
             console.log(data);
             
          });

            this.router.navigate(["/cart"]);

         }
        
            
            
        }

    

    

}
