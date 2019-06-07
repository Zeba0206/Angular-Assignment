import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Output() public childEvent=new EventEmitter();
  data: any;
  constructor(private service: SharedService) { }

  ngOnInit() {
    this.service.sharedData.subscribe(data => {
      this.data = data;
    })
  }


  fireEvent(value)
  {
    this.childEvent.emit(value);
  }
}
