import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontSizePx = 16;
  title = 'TwoWayBinding';
  fruits = ['Mango', 'orange', 'Peach']
}
