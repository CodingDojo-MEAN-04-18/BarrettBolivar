import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  note = {text: ''};
  onSubmit(event, form) {
    console.log(form.text);
    
  }
}
