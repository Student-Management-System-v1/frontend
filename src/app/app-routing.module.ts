import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsListComponent} from "./pages/students/students-list/students-list.component";
import {AddStudentComponent} from "./pages/students/add-student/add-student.component";
import {HomeComponent} from "./pages/home/home.component";
import {CoursesListComponent} from "./pages/courses/courses-list/courses-list.component";
import {AddCourseComponent} from "./pages/courses/add-course/add-course.component";
import {ResultsListComponent} from "./pages/results/results-list/results-list.component";
import {AddResultComponent} from "./pages/results/add-result/add-result.component";


const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'students', component: StudentsListComponent},
  {path: 'add-new-student', component: AddStudentComponent},
  {path: 'courses', component: CoursesListComponent},
  {path: 'add-new-course', component: AddCourseComponent},
  {path: 'results', component: ResultsListComponent},
  {path: 'add-new-result', component: AddResultComponent},
  {path: '**', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
