import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
