import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyIntroductionComponent } from './my-introduction/my-introduction.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MyProjectsComponent, MyIntroductionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
