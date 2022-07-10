import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { DataService } from '../DataService.service';
import{apiResponse} from '../models';
import { CartshoppingService} from 'src/app/cartshopping.service';
@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {

  users:any;
  constructor(public userservice:UserService, private CartShoppingService: CartshoppingService,private dataService: DataService){}
  
  users$:Observable <apiResponse> =new Observable();
  
  ngOnInit(){
    
    this.userservice.getUsers().subscribe((data)=>{
      this.users=data;
       
      });
   
  }addToCart(bookno:number) {
    this.CartShoppingService.addBookToCart(bookno).subscribe(
      result => {alert("One Item added to cart");this.sendNewData(1);
        // this.usercartService.cartItemcount$.next(result);
        // this.snackBarService.showSnackBar('One Item added to cart');
      }, error => {
        console.log('Error ocurred while addToCart data : ', error);
      });
  }
  sendNewData(data: number) {
    this.dataService.sendData(data);
  }
  }