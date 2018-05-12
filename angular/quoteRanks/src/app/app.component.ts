import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    {body: 'I see a door and I want to paint it black.', author: 'good song', rating: 25},
    {body: 'Stay in your lane, boy.', author: '21 Pilots', rating: 2},
    {body: 'So Jaded. Im the one that jaded you.', author: 'Aerosmith', rating: 23}
  ];

  createQuote(quote) {
    this.quotes.push(quote);
  }

  deleteQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }

}