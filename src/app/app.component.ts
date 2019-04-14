import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = [
    'Davido',
    'Wizkid',
    'Burna Boy',
    'Kiss Daniel',
    'Mayorkun',
    'Mr. Eazi',
    'Tiwa Savage',
    'Blaqbonez',
    'Banky W',
    'Yemi Alade'
  ];

  dates = [
    'KW1',
    'KW2',
    'KW3',
    'KW4',
    'KW5',
    'KW6',
    'KW7',
    'KW8',
    'KW9',
    'KW10',
  ];

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
}
