import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API_URL = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  getAllStudents(){
    return this.http.get<Student[]>(`${this.API_URL}/students`);
  }

  saveStudent(student:Student){
    return this.http.post<Student>(`${this.API_URL}/students`,student)
  }

  deleteStudent(studentId:any){
    return this.http.delete(`${this.API_URL}/students/${studentId}`)
  }
}
