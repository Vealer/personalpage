import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  english: boolean = false;
  text1: string = '';
  text2: string = '';
  text3: string = '';
  text4: string = '';

  submitted = false;

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });


  constructor(private dataService: DataService, private formBuilder: FormBuilder) { 
    this.changeText();
  }

  ngOnInit() {
    this.dataService
      .langChanged
      .subscribe(() => {
        this.english = this.dataService.get();
        this.changeText();
      }),
      this.form = this.formBuilder.group(
        {
          message: ['', [Validators.required,  Validators.minLength(6)]],
          username: [
            '',
            [
              Validators.required,
              Validators.pattern('[a-zA-Z ]*'),
              Validators.minLength(6),
              Validators.maxLength(20)
            ]
          ],
          email: ['', Validators.compose([
            Validators.required,
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+[\.]([a-z]){2,4}$")])],
        },
      );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('Fertig');

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    console.log(this.form.value.message);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  
  changeText() {
    let en: boolean = this.english;
    this.text1 = en ? `Contact me` : `Kontakt`;
    this.text2 = en ? `Get in touch via the form below, or by emailing` : `Kontaktieren Sie mich über das unten stehende Formular oder per E-Mail: `;
    this.text3 = en ? `Message` : `Nachricht`;
    this.text4 = en ? `Send message` : `Nachricht senden`;
  }
}
