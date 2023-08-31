import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cocktail } from '../models/cocktail';
import { Service } from '../services/svc.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent {
  @Input() cocktail: Cocktail | undefined;
  @Input() topOrder = false;
  @Output() orderPlaced = new EventEmitter<boolean>();

  ordersPage = false;
  constructor(private route: ActivatedRoute, private svc: Service){
    this.route.url.subscribe(url => {
      this.ordersPage = url.some(segment => segment.path === 'orders');
    });
  }

  order() {    
    this.svc.createOrder(this.cocktail!).subscribe({
      next: () => alert('Your order has been placed!'),
      error: err => console.log(`Your order could not be placed: ${err.message}`)
    });
  }
  
  complete() {
    this.svc.completeOrder().subscribe({
      next: () => {
        this.orderPlaced.emit(true);
        alert('Your order has been completed!');
      }
    });
  }

}
