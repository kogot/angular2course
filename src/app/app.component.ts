import { Component, Directive } from '@angular/core';
import {CoursesComponent} from './courses.component';
import {TaskComponent} from './task.component';


@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
   <input type="text" autoGrow />
  <courses></courses>
  <tasks></tasks>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
