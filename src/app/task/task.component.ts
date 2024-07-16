import { Component,Input } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [TasksComponent, NewTaskComponent]
})
export class TaskComponent {
  @Input({required:true}) name!:string
  @Input ({required:true}) userId!:string
  addTaskV:boolean=false;
  selectedUserId='u1'
  tasks=[
    {
      id:'t1',
      title:'Angular',
      summary:'learn all basics for angular',
      dueDate:'2024-8-30',
      completed: false,
      userId:'u1'
    },
    {
      id:'t2',
      title:'Javascript',
      summary:'learn all basics for angular',
      dueDate:'2025-8-30',
      completed: false,
      userId:'u3'
    },
    {
      id:'t3',
      title:'c++',
      summary:'learn all basics for angular',
      dueDate:'2024-8-30',
      completed: false,
      userId:'u3'
    }
  ]
  get selectedUser(){
    return this.tasks.filter((task)=> task.userId===this.userId)
  }
  completeTask(id:string){
    // this.tasks=this.tasks.filter((task)=>task.id!=id)
    // this.tasks = this.tasks.map(task =>
    //   task.id === id ? { ...task, completed: true } : task
    // );
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
    }
  }
  addTask(){
    this.addTaskV=true
  }
  closeTask(){
    this.addTaskV=false
  }
}
