import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() public childEvent = new EventEmitter();


  message($event){
    this.childEvent.emit($event);
}
  constructor() { }

  ngOnInit() {
  }

}
