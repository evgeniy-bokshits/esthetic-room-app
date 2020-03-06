import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {
  sidenavWidth = 64;


  constructor() { }

  ngOnInit(): void {
  }

  expand() {
    this.sidenavWidth = 256;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 64;
    console.log('decrease sidenav width');
  }
}
