import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsListComponent } from './pages/students/students-list/students-list.component';
import { AddStudentComponent } from './pages/students/add-student/add-student.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './pages/home/home.component';
import { AddCourseComponent } from './pages/courses/add-course/add-course.component';
import { CoursesListComponent } from './pages/courses/courses-list/courses-list.component';
import { AddResultComponent } from './pages/results/add-result/add-result.component';
import { ResultsListComponent } from './pages/results/results-list/results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    AddStudentComponent,
    HomeComponent,
    AddCourseComponent,
    CoursesListComponent,
    AddResultComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
