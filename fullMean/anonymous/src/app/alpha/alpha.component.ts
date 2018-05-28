import { Component, OnInit } from '@angular/core';
import { AnonService } from '../anon.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  note: String[] = [];
  constructor(private _anonservice: AnonService) { }

  ngOnInit() {
    this._anonservice.note.subscribe(
      (note) => {this.note = note; }
    )
  }
  onSubmit(event, form){
    this._anonservice.addNote(event, form);
  }
}
