import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillAnalizeComponent } from './components/skill-analize/skill-analize.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent,
    SkillAnalizeComponent,
    RegistrationPageComponent,
      AuthPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
