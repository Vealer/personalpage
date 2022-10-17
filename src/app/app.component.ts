import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public english: boolean = false;
  text: string = 'Deutsch';

  change() {
    this.english = !this.english;
    let en: boolean = this.english;
    this.text = en ? 'English' : 'Deutsch';
  }
}
