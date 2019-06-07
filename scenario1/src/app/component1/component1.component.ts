import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
      <h2>
          Welcome {{name}}
      </h2>
      <input #myInput type="text" value="">
      <button (click)="logMessage(myInput.value)">Log</button>
      `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    console.log(value);
  }

}
