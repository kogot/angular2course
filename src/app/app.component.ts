import { Component, Directive } from '@angular/core';
import {CoursesComponent} from './courses.component';
import {TaskComponent} from './task.component';


@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <button class="btn btn-info" [class.active]="isActive"  
  [style.backgroundColor]="isActive ? 'orange' : 'black'">Submit</button>
   <input type="text" autoGrow />
   <div (click)="onDivClick()"><button (click)="onClick($event)">Click</button></div>
   <button on-click="onClick()">Click #2</button>

   <input type="text" [value]="title" (input)="title= $event.target.value" />
   Preview: {{title}}
   <button class="btn" (click)="title =''" value="Clear">Clear</button>

<div>

<input type="text" [(ngModel)]="title" />

</div>

  <courses></courses>
  <tasks></tasks>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isActive =true;

  onClick($event){
    $event.stopPropagation();
    console.log("click", $event);
  }

  onDivClick(){
    console.log("handled by div")
  }
}
