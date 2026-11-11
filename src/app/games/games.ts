import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  standalone: true,
  template: ` 
  <h3>Juegos favoritos de {{ username }}</h3>
  <ul>
    @for (game of games; track game.id) {
      <li (click)="fav(game.name)"> {{ game.name }}</li>
    }
  </ul> `,
  styles: ``,
})
export class Games {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    { id: 1, name: 'The Legend of Zelda: Breath of the Wild' },
    { id: 2, name: 'Bloodborne' },
    { id: 3, name: 'Red Dead Redemption 2' },
    { id: 4, name: 'Minecraft' },
  ];
}
