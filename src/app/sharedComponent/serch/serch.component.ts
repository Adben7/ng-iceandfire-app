import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.scss']
})
export class SerchComponent implements OnInit {

  filtertext: string;

  @Output() newfilterEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  serch(value: string){
    this.newfilterEvent.emit(value);
  }

}
