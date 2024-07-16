import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { Task } from './Task';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) task!:Task
@Output() complete= new EventEmitter<string>()

// output Function
// user= output<srting>();
// userf(){
//   this.user.emit(id)
// }
completeTask(){
 this.complete.emit(this.task.id)
 //emit=> output new value
}
}
