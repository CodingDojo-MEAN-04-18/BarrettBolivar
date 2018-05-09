import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  idx: number;
  switches: string[] = ['off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off'];
  color: boolean[] = [false, false, false, false, false, false, false, false, false, false];
  onButtonClick(event, idx) { 
    if (event === 'off'){
      this.switches[idx] = 'on'
      this.color[idx] = true;
    } else if (event === 'on'){
      this.switches[idx] = 'off'
      this.color[idx] = false;
    }
  }
}
