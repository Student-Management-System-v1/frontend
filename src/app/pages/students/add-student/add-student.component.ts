import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../../service/student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  form!: FormGroup;
  isSubmitted:boolean = false;
  failed: boolean = false;
  invalid: boolean = false;
  success: boolean = false;
  constructor(private formBuilder: FormBuilder, private studentService:StudentService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      familyName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.closeAlert()
    let studentToSave = this.form.value;
    let date = new Date(studentToSave.dateOfBirth);
    console.log("studentToSave: ")
    console.log(studentToSave)
    let age = this.calculateAge(date);
    console.log("age: ",age)

    if (this.form?.valid && age >= 10 && this.isValidEmail(studentToSave.email)) {
      this.studentService.saveStudent(studentToSave).subscribe(res => {
        console.log("NEW Student created :)");
        console.log(res)
        this.form.reset();
        this.success = true;
      },error => {
        this.failed = true;
      })

    }
    else {
      console.log("INVALID USER FORM")
      this.invalid = true;
    }
  }

  isValidEmail(email:string): boolean{
    let regex = /[a-z]+\.[a-z]+@[a-z]+\.[a-z]/
    return regex.test(email);
  }

  calculateAge(birthdate: Date): number {
    const today = new Date();
    const years = today.getFullYear() - birthdate.getFullYear();
    const months = today.getMonth() - birthdate.getMonth();
    const days = today.getDate() - birthdate.getDate();
    return years + (months / 12) + (days / 365);
  }

  closeAlert(){
    this.success = false;
    this.failed = false;
    this.invalid = false;
  }

}
