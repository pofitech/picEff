import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { hero } from '../hero';
import { Heros } from '../mock-hero.ts';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
	
	hero = Heros;// = {id: 1, name: 'Bala'};

  constructor() { }

  ngOnInit() {
  }

}
