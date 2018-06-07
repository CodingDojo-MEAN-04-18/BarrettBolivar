import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  players: Array<Player>[];
  constructor(private _PlayerService: PlayerService) { }

  ngOnInit() {
    this.players = this._PlayerService.retrievePlayers();
  }
  onSubmit(id){
    this._PlayerService.deletePlayer(id);
  }
}
