import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	
	hero: Hero = {id: 1, name: 'Bala'};

  constructor() { }

  ngOnInit() {
  }

}
