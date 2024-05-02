import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component'
import { AuthPageComponent } from './components/auth-page/auth-page.component'
import { SkillAnalizeComponent } from './components/skill-analize/skill-analize.component'
import { SkillUploadComponent } from './components/skill-upload/skill-upload.component'

const routes: Routes = [
  { path: '', component: AboutPageComponent },
  { path: 'registration', component: RegistrationPageComponent},
  { path: 'auth', component:AuthPageComponent},
  { path: 'skills', component: SkillAnalizeComponent},
  { path: 'skillsUpload', component: SkillUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}

