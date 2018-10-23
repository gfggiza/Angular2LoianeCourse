import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  public heart: boolean = false;
  public color: boolean = false;
  public updown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ILove() {
    this.heart = !this.heart;
  }

  OnHover() {
    this.color = !this.color;
  }
  OnKeys(){
    this.updown = !this.updown;
  }
}
