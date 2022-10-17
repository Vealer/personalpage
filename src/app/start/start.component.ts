import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  @Input()
  english: boolean = false;

  constructor() {
    this.changeText();
  }

  ngOnInit(): void {}

  text1: string = '';
  text2: string = '';
  text3: string = '';
  text4: string = '';

  changeText() {
    let en: boolean = this.english;
    this.text1 = en ? `Hi! I'm Val` : `Hi! Ich bin Val`;
    this.text2 = en ? `a w` : `ein W`;
    this.text3 = en ? `develop` : `Entwickl`;
    this.text4 = en ? `Frontend developer` : `Frontend Entwickler`;
    
  }

  ngOnChanges() {
    this.changeText();
  }
}
