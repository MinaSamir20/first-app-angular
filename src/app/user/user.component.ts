import { Component ,Input,Signal, computed, signal,input, Output, EventEmitter} from '@angular/core';
import { user } from './user';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // hamade=signal()
  //receive data from outside
//   @Input({required:true}) id!:string
// @Input({required:true}) avatar!:string;
// @Input({required:true}) name!:string;
@Input() user!:user
@Output() data= new EventEmitter<string>()
//input function =>signals
// avatar=input.required<string>();
// name=input.required<string>()

   get imagePath(){
    return 'assets/users/'+this.user.avatar
   }
  // imagePath=computed(()=>'assets/users/'+this.avatar())
   onSelectUser(){
    this.data.emit(this.user.id)
   }
}
