import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'Rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoldService {
  gold: number = 0;
  activities = [];
  constructor() { }

  initializeGold(){
    return this.gold;
  }
  initializeActivities(){
    return this.activities;
  }
  addGold(location: number){
    if (location === 1){
      let tempGold = Math.floor(Math.random()*5) + 2;
      this.gold += tempGold;
      this.activities.push("You just earned " + tempGold + " gold.")
      console.log('loc', location, 'gold', tempGold, 'thisgold', this.gold);
    }
    else if (location === 2){
      let tempGold = Math.floor(Math.random()*10) + 5;
      this.gold += tempGold;
      this.activities.push("You just earned " + tempGold + " gold.")
      console.log('loc', location, 'gold', tempGold);
    }
    else if (location === 3){
      // negative or postive modifier generator
      let modifier: number = Math.round(Math.random()) ? 1 : -1;
      console.log(modifier);
      let tempGold = Math.floor(Math.random()*101) * modifier;
      this.gold += tempGold;
      this.activities.push("Total lost or gained: " + tempGold + " gold.")
      console.log('loc', location, 'gold', tempGold);
    }
    else if (location === 4){
      let tempGold = Math.floor(Math.random()*15) + 7;
      this.gold += tempGold;
      this.activities.push("You just earned " + tempGold + " gold.")
      console.log('loc', location, 'gold', tempGold);
    }
  }
}
