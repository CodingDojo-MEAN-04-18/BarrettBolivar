import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent implements OnInit {
  activities= []
  constructor(private _goldService: GoldService) { }

  ngOnInit() {
    this.activities = this._goldService.initializeActivities();
  }

}
