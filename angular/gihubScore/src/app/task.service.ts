import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }
  retrieveTask(user: string){
    let user1 = this._http.get(`https://api.github.com/users/${ user }`);
    console.log(user1);
    
    return this._http.get(`https://api.github.com/users/${ user }`);
  }
}
