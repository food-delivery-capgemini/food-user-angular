import { Component, OnInit } from '@angular/core';
import { DishService } from './dish.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dish } from './dish';
import { Users } from '../customer/user';
import { Address } from '../user';
import { CheckOutService } from './checkout.service';

@Component({
    templateUrl:"./checkout.component.html"  
})
export class CheckoutComponent implements OnInit{
    dishes:Dish[];
    user:Users;
    user2:Users;
    // address:Address;
    // user:Users;

    constructor(private dishService: DishService,
        private checkoutService:CheckOutService,
        private route: ActivatedRoute,private router:Router) { }

      
 



        ngOnInit(): void {

            this.user2=new Users();
            
            // this.address=new Address();
            this.user=JSON.parse(sessionStorage.getItem('user'));
            console.log(this.user);

            this.user2=this.user;
            // this.dishService.findAllDishes().subscribe(data=>{
            //     console.log(data);
            //     this.dishes=data;

            // },err=>{
            //     console.log(err);
            // })
        
   
   
   }
//    this.user=JSON.parse(sessionStorage.getItem('user'));
//    console.log(this.user);

   addAddress(user){
    this.user=JSON.parse(sessionStorage.getItem('user'));
    this.checkoutService.addNewAddress(user).subscribe((data)=>{
        //console.log(this.user.address.city);

     
  });


}

proceed(){

    this.router.navigate(["/payment"]);
}
    
       

    }
