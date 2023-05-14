import { Component, OnInit } from '@angular/core';
import {Student} from "../../../model/student.model";
import {StudentService} from "../../../service/student.service";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students!: Student[];
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.students = []
    this.studentService.getAllStudents().subscribe(res => {
      console.log("--> API RESPONSE: GET Req")
      console.log(res)
      this.students = res;
    },error => {
      console.log(error)
    });
  }

  deleteStudent(student: Student){
    console.log("deleting student: ")
    console.log(student)
    this.studentService.deleteStudent(student?.id).subscribe(res => {
      console.log("--> API RESPONSE: DELETE Req");
      console.log(res);
      let index = this.students?.indexOf(student);
      console.log("index: ")
      console.log(index);
      this.students.splice(index,1)
    });
  }

}
