import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Feedback, Orders } from './profile-order';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
    // selector: 'app-rating',

  
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
  })
export class FeedbackComponent implements OnInit{

feedback:Feedback;
 rating: number;
 itemId: number;
 starWidth:number;
 order:Orders;
  ratingClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private feedbackService: CustomerService,private router:Router) { }

  inputName: string;
  ngOnInit() {
    this.feedback=new Feedback();
 
  }
  onClick(rating: number): void {

   
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating,
      starWidth: this.rating * 75/5,
      starColor:"red"
   

    });
    console.log("feedback");
    console.log(this.rating);

    this.feedback.rating=this.rating;
     this.feedback.orderId=this.order.orderId;
  //  console.log(this.starWidth);
  }
  feedbackDetails(){

    
    this.feedbackService.addFeedback(this.feedback).subscribe((data)=>
  {
    this.router.navigate(["/home"]);


  });
   }

}


