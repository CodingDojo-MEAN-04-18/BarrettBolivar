import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Array<Player>[];

  constructor() { }

  retrievePlayers(){
    return this.players;
  }
  addPlayer(player){
    //crashes on addPlayer event
    console.log(player);
    this.players.push(player);
  }
  deletePlayer(id){
    // how would I get this to work
  }
}
