import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StartComponent } from './start/start.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    StartComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    FooterComponent,
    PrivacyComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
