import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from './../character';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.less']
})
export class LibraryComponent {
	@Input() characters: Character[];
	@Output() selectedCharacter: EventEmitter<number> = new EventEmitter();

	constructor() { }

  	selectCharacter(character: number) {
    	this.selectedCharacter.emit(character);
  	}
}
