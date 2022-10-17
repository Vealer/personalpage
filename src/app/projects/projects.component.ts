import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input()
  english: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  text1: string = '';
  text2: string = '';
  text3: string = '';
  text4: string = '';
  text5: string = '';

  changeText() {
    let en: boolean = this.english;
    this.text1 = en ? `My` : `Mein`;
    this.text2 = en ? `A jump & run game` : `Ein jump & run Spiel`;
    this.text3 = en ? `A canban group project` : `Eine Kanban Gruppenarbeit`;
    this.text4 = en ? `A socialmedia clone` : `Eine Instagram Kopie`;
    this.text5 = en ? `A game, written with Angular` : `Ein Kartenspiel mit Angular geschrieben`;
    
  }

  ngOnChanges() {
    this.changeText();
  }

}
