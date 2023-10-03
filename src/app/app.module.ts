import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyIntroductionComponent } from './my-introduction/my-introduction.component';
import { MyStackComponent } from './my-stack/my-stack.component';
import { ContactComponent } from './my-introduction/contact/contact.component';
import { CareerSummaryComponent } from './my-introduction/career-summary/career-summary.component';
import { SkillsComponent } from './my-introduction/skills/skills.component';
import { EducationComponent } from './my-introduction/education/education.component';
import { CertificateComponent } from './my-introduction/certificate/certificate.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MyProjectsComponent, MyIntroductionComponent, MyStackComponent, ContactComponent, CareerSummaryComponent, SkillsComponent, EducationComponent, CertificateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
