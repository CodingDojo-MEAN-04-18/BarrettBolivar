import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-levels',
  templateUrl: './power-levels.component.html',
  styleUrls: ['./power-levels.component.css']
})
export class PowerLevelsComponent implements OnInit {
  power: number;

  constructor() { }

  ngOnInit() {
    this.power = 10;
  }

}
