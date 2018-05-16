import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  exists: boolean = null;
  score: number = 0;
  username: string = null;

  constructor(private taskService: TaskService) {}

  calculateScore(form: NgForm) {
    this.username = form.value.username;

    this.taskService.retrieveTask(this.username)
      .subscribe(
        user => {
          this.exists = true;
          this.score = user.public_repos + user.followers;
          form.reset();
        },
        (response: Response) => this.exists = false
      );
    }

  ngOnInit() {
  }

}
