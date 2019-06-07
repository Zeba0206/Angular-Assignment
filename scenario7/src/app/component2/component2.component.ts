import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Input('parentData') public message1;
  constructor(private service: SharedService) { }

  ngOnInit() {
  }
  
  myMethod(data) {
    this.service.sharedData.next(data);
  }

}
