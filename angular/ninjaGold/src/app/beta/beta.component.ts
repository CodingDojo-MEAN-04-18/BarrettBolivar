import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  gold: number;
  constructor(private _goldService: GoldService) { }

  ngOnInit() {
    this.gold = this._goldService.initializeGold();
  }
  getGold(loc: number){
    this._goldService.addGold(loc);
  }
}
