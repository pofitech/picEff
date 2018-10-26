import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'offer';
  products = [
  {
  'id': 1,
  'name': 'Shirt',
  'price': '20'
  },
  {
  'id': 2,
  'name': 'Black Shirt',
  'price': '50'
  }
  ]
}
