import { Component, OnInit } from '@angular/core';
import {Course} from "../../../model/course.model";
import {CourseService} from "../../../service/course.service";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses!: Course[];
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courses = [];
    this.courseService.getAllSCourses().subscribe(res => {
      this.courses = res;
    },error => {
      console.log(error)
    });
  }

  deleteCourse(course: Course){
    this.courseService.deleteCourse(course?.id).subscribe(res => {
      let index = this.courses?.indexOf(course);
      this.courses.splice(index,1)
    });
  }

}
