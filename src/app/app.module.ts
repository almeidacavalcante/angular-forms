import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { PasswordChangerComponent } from './password-changer/password-changer.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    SignupFormComponent,
    TagListComponent,
    PasswordChangerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
