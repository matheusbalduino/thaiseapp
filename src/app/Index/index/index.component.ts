import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  menu:string = "menu";
  clickMenu: boolean = false;
  colNumber: string = "3"
  effectOn: boolean = false;
  effectOn2: boolean = false;
  public getScreenWidth: any;
  public getScreenHeight: any;
  public lastPositionY:any;

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
    if(this.getScreenWidth > 748 ) this.clickMenu = false;
  }
  
  count:number = 0

  @HostListener('window:scroll', ['$event'])
  onScrollDown(){
    const elementBox1 = document.getElementById("boxResume")
    const heightBox1 = elementBox1?.scrollHeight || 0

    const elementBox2 = document.getElementById("boxResume2")
    const heightBox2 = elementBox2?.scrollHeight || 0

    this.lastPositionY = window.scrollY;

    if(this.lastPositionY > heightBox1 + 200) this.effectOn = true
    else this.effectOn = false
    if(this.lastPositionY > heightBox2 - 100) this.effectOn2 = true
    else this.effectOn2 = false
  }

  onClickHome(){
    const elementBox1 = document.getElementById("boxResume")
    const heightBox1 = elementBox1?.scrollHeight || 0
    window.scrollTo(0, heightBox1 + 800)
    console.log('click')
  }



}
