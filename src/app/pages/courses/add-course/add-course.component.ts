import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../../service/course.service";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  newCourseForm!: FormGroup;
  failed: boolean = false;
  invalid: boolean = false;
  success: boolean = false;
  constructor(private formBuilder: FormBuilder, private courseService:CourseService) { }

  ngOnInit(): void {
    this.newCourseForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    this.closeAlert()
    let courseToSave = this.newCourseForm.value;
    if (this.newCourseForm?.valid) {
      this.courseService.saveCourse(courseToSave).subscribe(res => {
        this.newCourseForm.reset();
        this.success = true;
      },error => {
        this.failed = true;
      })

    }
    else {
      console.log("INVALID COURSE FORM")
      this.invalid = true;
    }
  }

  closeAlert(){
    this.success = false;
    this.failed = false;
    this.invalid = false;
  }

}
