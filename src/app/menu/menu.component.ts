import { Component } from '@angular/core';

import { Cocktail } from '../models/cocktail';
import { Service } from '../services/svc.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu: Cocktail[] = [];

  constructor(private svc: Service){ }

  ngOnInit() {
    this.svc.getMenu().subscribe(menu => this.menu = menu);
  }

}
