import { Component } from '@angular/core';
import { User } from './app';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  success: boolean = false;
  user: User = new User();
  users: Array<User> = [];
  onSubmit(event: Event, form: NgForm){
    this.users.push(this.user);
    console.log(this.user);
    this.user = new User();
    this.success = true;
    form.reset();
  }
}
