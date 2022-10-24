import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  menu:string = "menu";
  clickMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openCloseNav(){
    if(this.clickMenu) this.menu = "menu"
    if(!this.clickMenu) this.menu = "close"
    this.clickMenu = !this.clickMenu;
  }

}
