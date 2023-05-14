import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Course} from "../../../model/course.model";
import {Student} from "../../../model/student.model";
import {ResultService} from "../../../service/result.service";
import {StudentService} from "../../../service/student.service";
import {CourseService} from "../../../service/course.service";

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {
  newResultForm!: FormGroup;
  failed: boolean = false;
  invalid: boolean = false;
  success: boolean = false;
  scores: String[] = ["A","B","C","D","E","F"]
  courses?: Course[];
  students?: Student[];
  constructor(private formBuilder: FormBuilder,
              private resultService:ResultService,
              private studentService:StudentService,
              private courseService:CourseService) { }

  ngOnInit(): void {
    this.courses = []
    this.students = []
    this.courseService.getAllSCourses().subscribe(res => {
      this.courses = res;
    });
    this.studentService.getAllStudents().subscribe(res => {
      this.students = res;
    });

    this.newResultForm = this.formBuilder.group({
      courseId: [null, Validators.required],
      studentId: [null, Validators.required],
      score: [null, Validators.required],
    });


  }

  onSubmit() {
    this.closeAlert()
    let formData = this.newResultForm.value;
    if (this.newResultForm?.valid) {
      let result = {score: formData.score, student:{id: formData.studentId}, course:{id: formData.courseId}};
      this.resultService.saveResult(result)
        .subscribe(res => {
          this.success = true;
          this.newResultForm.reset();
      }, error => {
          this.failed = true;
        })

    }
    else {
      this.invalid = true;
    }
  }
  closeAlert(){
    this.success = false;
    this.failed = false;
    this.invalid = false;
  }
}
