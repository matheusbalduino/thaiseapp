import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  effectOn: boolean = false;
  effectOn2: boolean = false;
  public lastPositionY:any;

  constructor() { }

  ngOnInit(): void {
    this.effectOn = false
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize() {
   
  }

  count:number = 0

  @HostListener('window:scroll', ['$event'])
  onScrollDown(){
    const elementBox1 = document.getElementById("boxResume")
    const heightBox1 = elementBox1?.scrollHeight || 0

    const elementBox2 = document.getElementById("boxResume2")
    const heightBox2 = elementBox2?.scrollHeight || 0

    this.lastPositionY = window.scrollY;

    if(this.lastPositionY > heightBox1 + 200)this.effectOn = true
    
    if(this.lastPositionY > heightBox2 - 100) this.effectOn2 = true
  }

}
