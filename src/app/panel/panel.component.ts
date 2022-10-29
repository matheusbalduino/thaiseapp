import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() title:string = "";
  @Input() img:string = "";


  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
