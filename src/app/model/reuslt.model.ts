import {Student} from "./student.model";
import {Course} from "./course.model";

export interface Result {
  id?:number;
  course?:Course;
  student?:Student;
  score?:String;
}
