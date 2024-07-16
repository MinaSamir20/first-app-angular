import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent]
})
export class AppComponent {
  title = 'first-app-angular';
  users=DUMMY_USERS
  selectedUserId!:string;
  get selectedIser(){
    
    return this.users.find((user)=>user.id===this.selectedUserId)!
  }
  onSelectedUserId(id:string){
    this.selectedUserId=id;
    console.log(this.selectedUserId)
  }
}
