import { Component } from '@angular/core';

import { Cocktail } from '../models/cocktail';
import { Service } from '../services/svc.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders: Cocktail[] = [];

  constructor(private svc: Service) { }

  ngOnInit() {
    this.svc.getOrders().subscribe(orders => this.orders = orders);
  }

}
