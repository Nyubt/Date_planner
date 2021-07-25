import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../../../models/menu-item';
import { MenuItemService } from '../../../services/menu-item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  menuItems: IMenuItem[] = [
    {
      name: 'Home',
      type: 'AA',
      link: 'index.html',
      logoName: 'home'
    },
    {
      name: 'Services',
      type: 'AA',
      link: 'index.html',
      logoName: 'home'
    },
    {
      name: 'About us',
      type: 'AA',
      link: 'index.html',
      logoName: 'home'
    },
    {
     name: 'Log In',
     type: 'AA',
     link: 'index.html',
     logoName: 'home'
    }
  ];

  constructor(private menuItemService: MenuItemService) {
  }

  ngOnInit(): void {
    this.menuItemService.get().subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }

}
