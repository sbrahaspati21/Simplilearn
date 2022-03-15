import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
    `
      .container {
        margin-top: 30px;
      }
      .odd {
        color: red;
      }
    `,
  ],
})
export class TestComponent {
  numbers = [1, 3, 2, 4, 5, 6, 7, 9, 8, 12];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
}
