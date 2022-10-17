import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input()
  english: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  text1: string = '';
  text2: string = '';
  text3: string = '';
  text4: string = '';

  changeText() {
    let en: boolean = this.english;
    this.text1 = en ? `Contact me` : `Kontakt`;
    this.text2 = en ? `Get in touch via the form below, or by emailing` : `Kontaktieren Sie mich über das unten stehende Formular oder per E-Mail: `;
    this.text3 = en ? `Message` : `Nachricht`;
    this.text4 = en ? `Send message` : `Nachricht senden`;

    
  }

  ngOnChanges() {
    this.changeText();
  }

}
