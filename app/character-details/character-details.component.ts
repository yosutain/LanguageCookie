import { Component, Input } from '@angular/core';
import { Character } from './../character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.less']
})
export class CharacterDetailsComponent {
	@Input() character: Character;
	constructor() {}
}
