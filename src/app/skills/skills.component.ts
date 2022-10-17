import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  cards=[{name:'HTML', src:'assets/html.png'}, {name:'CSS', src:'assets/css.png'},{name:'JavaScript', src:'assets/js.png'},{name:'Git', src:'assets/git.png'},{name:'API', src:'assets/api.png'},{name:'Angular', src:'assets/angular.png'},{name:'SCRUM', src:'assets/scrum.png'},];

  constructor() { }

  @Input()
  english: boolean = false;



  ngOnInit(): void {
  }

  text1: string = '';

  changeText() {
    let en: boolean = this.english;
    this.text1 = en ? `My Skills` : `Meine Erfahrungen`;
  }

  ngOnChanges() {
    this.changeText();
  }

}
