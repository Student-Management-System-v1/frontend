import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../model/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  API_URL = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  getAllSCourses(){
    return this.http.get<Course[]>(`${this.API_URL}/courses`);
  }

  saveCourse(course:Course){
    return this.http.post<Course>(`${this.API_URL}/courses`,course)
  }

  deleteCourse(courseId:any){
    return this.http.delete(`${this.API_URL}/courses/${courseId}`)
  }
}
