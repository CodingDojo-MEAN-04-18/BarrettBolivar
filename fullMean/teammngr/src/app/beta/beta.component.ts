import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  player: Player = new Player();
  players: Array<Player>[];
  constructor(private _PlayerService: PlayerService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    const { value, valid } = form;
    console.log("onSubmit()", form.value);
    this._PlayerService.addPlayer(form);
    this.player = new Player();
    form.reset();
  }
}

