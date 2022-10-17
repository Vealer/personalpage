import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  constructor( ) {}

  @Input() english: boolean = false;

  aboutme: string = '';
  skills: string = '';
  contact: string = '';
  text: string = '';

  changeText() {
    let en: boolean = this.english;
    this.text = en ? 'English' : 'Deutsch';
    this.aboutme = en ? 'About Me' : 'Über mich';
    this.skills = en ? 'Skills' : 'Erfahrungen';
    this.contact = en ? 'Contact me' : 'Kontakt';
  }

  ngOnChanges() {
    this.changeText();
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
