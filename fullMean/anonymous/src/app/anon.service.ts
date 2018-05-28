import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnonService {
  note: BehaviorSubject<String[]> = new BehaviorSubject([]);

  constructor() {}
  addNote(event: String, form:any): void {
    console.log('addNote accessed ', form.form.value.note);
    console.log("the note ", this.note);
     
    const temp = this.note.getValue();
    temp.push(form.form.value.note);
    this.note.next(temp);
  }
}
