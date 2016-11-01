import { Component } from '@angular/core';
import {TaskService} from './task.service';

@Component({
    selector: 'tasks',
    template: `
    <h2>My {{title}}</h2>
    <ul>
    <li *ngFor="let task of tasks">
    {{task}}
    </li>
    </ul>    
    `,
    providers:[TaskService]
})

export class TaskComponent{
    title= "Tasks";
    tasks;

    constructor(taskService:TaskService){
        this.tasks = taskService.getTasks();
    }
}