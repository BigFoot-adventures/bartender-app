import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})

export class Service {
  baseUrl = 'http://localhost:3000';

  constructor(private client: HttpClient) { }

  getMenu() {
    return this.client.get<Cocktail[]>(`${this.baseUrl}/menu`);
  }

  getOrders() {
    return this.client.get<Cocktail[]>(`${this.baseUrl}/orders`);
  }

  createOrder(order: Cocktail) {
    let data = {
      name: order.name,
      ingredients: order.ingredients,
      instructions: order.instructions
    };
    return this.client.post<Cocktail>(`${this.baseUrl}/orders`, data);
  }

  completeOrder() {
    return this.client.get(`${this.baseUrl}/orders/completed`);
  }

}
