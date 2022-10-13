import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  
@Input()
english: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
