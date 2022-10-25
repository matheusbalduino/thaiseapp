import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  menu:string = "menu";
  clickMenu: boolean = false;
  colNumber: string = "3"
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  openCloseNav(){
    if(this.clickMenu) this.menu = "menu"
    if(!this.clickMenu) this.menu = "close"
    this.clickMenu = !this.clickMenu;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.adjustCardsSize();
  }

  adjustCardsSize(){
    this.colNumber = "3"

    if(this.getScreenWidth < 768 ){
      this.colNumber = "1";
    }
   
    if(this.getScreenWidth < 914 && this.getScreenWidth > 767){
      this.colNumber = "2";
    }
  }

}
