import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu:string = "menu";
  clickMenu: boolean = false;
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if(this.getScreenWidth > 748 ) this.clickMenu = false;
  }

  openCloseNav(){
    if(this.clickMenu) this.menu = "menu"
    if(!this.clickMenu) this.menu = "close"
    this.clickMenu = !this.clickMenu;
  }

  onClickHome(){
    const elementBox1 = document.getElementById("boxResume")
    const heightBox1 = elementBox1?.scrollHeight || 0
    window.scrollTo(0, heightBox1 + 800)

    if(this.getScreenWidth < 768){
      const elementBox2 = document.getElementById("boxResume2")
      const heightBox2 = elementBox2?.scrollHeight || 0
      window.scrollTo(0, heightBox2 + 800)
    }


  }

}
