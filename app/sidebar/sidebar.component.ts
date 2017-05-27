import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {
	selected: number = 1;
	selectedGameId: number = 1;

	@Output()
	selectedCharacterSet: EventEmitter<number> = new EventEmitter();

	@Output()
	selectedGame: EventEmitter<number> = new EventEmitter();

	constructor() { }

		selectCharacterSet(characterSet: number) {
			this.selected = characterSet;
			this.selectedCharacterSet.emit(characterSet);
		}

		selectGame(gameId: number) {
			this.selectedGameId = gameId;
			this.selectedGame.emit(gameId);
		}
}
