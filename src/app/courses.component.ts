import { Component, Directive } from '@angular/core';
import{ CourseService} from './course.service';

@Component({
  selector: 'courses',
  template: `
  <h2>MY courses</h2>
  {{title}}
 
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
  </ul>
  `,
  providers: [CourseService]
  
  })
export class CoursesComponent {
    title = "The title of courses";
    courses;

    constructor(courseService: CourseService){
      this.courses = courseService.getCourses();
    }
}
