import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  gold: number;
  constructor(private _goldService: GoldService) {}

  ngOnInit() {
    this._goldService.totalGold.subscribe(
      (gold) => { this.gold = gold; }
    )
  }
}
