import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  date = new Date();
  clicked = false;
  buttonId;
  onButtonClick(data, buttonId) {
    this.date = new Date(); 
    this.buttonId = data;
    console.log(buttonId);
    
    if (data){
      this.clicked = true;
      switch(data){
        case 1:
          this.date.setHours(this.date.getHours() + 2);
          break;
        case 2:
          this.date.setHours(this.date.getHours() + 1);
          break;
        case 4:
          this.date.setHours(this.date.getHours() - 1);
          break;
        default:
          break;
      }
    } else if (data == null){
      this.clicked = false;
      this.buttonId = 0;
    }
    console.log(`Click event is working, data:`, data);
  };
}
