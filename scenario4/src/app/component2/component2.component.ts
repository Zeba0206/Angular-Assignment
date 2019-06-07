import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
      <input #myId type="text">
      <button (click)="fireEvent(myId.value)">Send Event</button>
        `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(value){
    this.childEvent.emit(value);
  }

}
