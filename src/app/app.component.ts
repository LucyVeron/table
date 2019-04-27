import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

  slots = [];

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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}