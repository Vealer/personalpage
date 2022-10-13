import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  constructor( ) { 
    this.change();
  }

  english: boolean = true;
  aboutme: string = '';
  skills: string = '';
  contact: string = '';
  text: string = '';

  change() {
    this.english = !this.english;
    let en: boolean = this.english;
    this.text = en ? 'English' : 'Deutsch';
    this.aboutme = en ? 'About Me' : 'Über mich';
    this.skills = en ? 'Skills' : 'Fähigkeiten';
    this.contact = en ? 'Contact me' : 'Kontakt';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
