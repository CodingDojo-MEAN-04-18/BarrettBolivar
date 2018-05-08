import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// had to get help for this assignment {OnInit}
export class AppComponent implements OnInit {
  colorArr = [];

  fillImageArray() {
    for (let y = 0; y < 10; y++) {
      const randNum = (Math.floor(Math.random() * 6) ) + 1;
      if (randNum === 1) {
        this.colorArr.push('Green ');
      } else if (randNum === 2) {
        this.colorArr.push('Lime ');
      } else if (randNum === 3) {
        this.colorArr.push('Blue ');
      } else if (randNum === 4) {
        this.colorArr.push('Black ');
      } else if (randNum === 5) {
        this.colorArr.push('Orange ');
      } else if (randNum === 6) {
        this.colorArr.push('Yellow');
      } else if (randNum === 7) {
        this.colorArr.push('Red');
      }
    }
  }

  ngOnInit() {
    this.fillImageArray();
  }

}