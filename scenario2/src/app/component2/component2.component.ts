import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
  <input [(ngModel)]="name" type="text">
  {{name}}
  `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public name = '';

  constructor() { }

  ngOnInit() {
  }

}
