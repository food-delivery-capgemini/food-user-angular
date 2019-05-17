import { Component, OnInit } from '@angular/core';
import { Address, Users } from './user';
import { WelcomeService } from './welcome.service';
import { Router } from '@angular/router';
import { Cart } from './order/cart';
import { AppService } from './app.service';

@Component({
    templateUrl: "./welcome.component.html"
})
export class WelcomeComponent implements OnInit {

    constructor( public nav: AppService ) {}

    ngOnInit() {
        // this.nav.hide();
    
      }
    // user: Users;

    // constructor(private welcomeService: WelcomeService,
    //     private router: Router) { }

    // ngOnInit() {
    //     this.user = new Users();
    //     this.user.address = new Address();
     

    // }

    // register(): void {

    //     this.welcomeService.registerNewUser(this.user).subscribe((data) => {

    //         console.log("success");

    //         if (data != null) {
               

    //             alert("registration is successfulPlease, login");


    //             this.router.navigate(["/home"]);
    //             var element = document.getElementById("my");
    //              element.classList.remove("show");
    //             document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");

    //         }else{
    //             alert("Login Unsuccessful    Please ,Try again");
    //         }

    //     })


    // }


    // login(): void {

    //     let email = (<HTMLInputElement>document.getElementById("email")).value;
    //     let password = (<HTMLInputElement>document.getElementById("pwd")).value;
        
    //     this.welcomeService.loginUser(email).subscribe((data) => {
           
    //         this.user=data;
    //         if (data != null) {

    //             if(password==this.user.password){
    //                 console.log("success");

    //                 alert("Login successful");
    //                 let cart = new Cart();
    //                 cart.email = this.user.email;
    //                 sessionStorage.setItem("myCart", JSON.stringify(cart));
    //                 this.router.navigate(["/profile"]);

              
    //             sessionStorage.setItem('user', JSON.stringify(this.user));

    //             }
               
    //             this.router.navigate(["/profile"]);

    //             var element = document.getElementById("myModal");
    //             element.classList.remove("show");
    //            document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");
    //         }
    //     })
    // }



}
