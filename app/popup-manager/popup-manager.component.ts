import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from './../character';

@Component({
	selector: 'app-popup-manager',
	templateUrl: './popup-manager.component.html',
	styleUrls: ['./popup-manager.component.less']
})

export class PopupManagerComponent {
	@Input() characters: Character[];
	@Input() characterSubSet: Character[];
	@Output() updatedCharacterSubSet: EventEmitter<Character[]> = new EventEmitter();
	@Output() closeAllPopups: EventEmitter<string> = new EventEmitter();

	constructor() {}
	
		updateCharacterSubSet(characterSubSet: Character[]) {
			this.updatedCharacterSubSet.emit(characterSubSet);
		}

		closePopup(popup: string, event: any) {
			var target = event.target || event.srcElement;
			if (target.id == "popupManager" || 
				target.id == "closeAllPopups" ||
				target.className == "closeAllPopups" ||
				target.className.baseVal == "closeAllPopups") {
				this.closeAllPopups.emit("none");
			}
		}

		characterSubSetCharacter(index: number) {
			return this.characterSubSet[index];
		}

		toggleCharacterSubSetCharacter(index: number) {
			if (this.characterSubSet[index].id == 0) {
				this.characterSubSet[index].id = this.characters[index].id;
			} else {
				this.characterSubSet[index].id = 0;
			}
		}

		toggleCharacterSubSetCharacterRow(index: number) {
			let x = (index * 5) - 1;
			let x1 = this.characterSubSet[x+1];
			let x2 = this.characterSubSet[x+2];
			let x3 = this.characterSubSet[x+3];
			let x4 = this.characterSubSet[x+4];
			let x5 = this.characterSubSet[x+5];
			if ((x1.id == 0 && x1.character != "") || (x2.id == 0 && x2.character != "") || 
				(x3.id == 0 && x3.character != "") || (x4.id == 0 && x4.character != "") || 
				(x5.id == 0 && x5.character != "")){
				x1.id = this.characters[x+1].id;
				x2.id = this.characters[x+2].id;
			 	x3.id = this.characters[x+3].id;
				x4.id = this.characters[x+4].id;
				x5.id = this.characters[x+5].id;
			} else {
				x1.id = 0; x2.id = 0; x3.id = 0; x4.id = 0; x5.id = 0;
			}
		}
		
		entireRowIsSelected(index: number) {
			let x = (index * 5) - 1;
			let x1 = this.characterSubSet[x+1];
			let x2 = this.characterSubSet[x+2];
			let x3 = this.characterSubSet[x+3];
			let x4 = this.characterSubSet[x+4];
			let x5 = this.characterSubSet[x+5];
			if ((x1.id != 0 || x1.character == "") && (x2.id != 0 || x2.character == "") && 
				(x3.id != 0 || x3.character == "") && (x4.id != 0 || x4.character == "") && 
				(x5.id != 0 || x5.character == "")){
				return true;
			} 
			return false;
		}

		toggleCharacterSubSetCharacterColumn(index: number) {
			let addAll: boolean;
			let i = index;
			let array: number[] = [i];
			while (this.characterSubSet[i]) {
				array.push(i);
				if (this.characterSubSet[i].id == 0 && this.characterSubSet[i].character != "") {
					addAll = true;
				}
				i += 5;
			}

			for (let j = 0; j < array.length; ++j) {
				if (!addAll) {
					this.characterSubSet[array[j]].id = 0;
				} else {
					this.characterSubSet[array[j]].id = this.characters[array[j]].id;
				}
			}	
		}

		entireColumnIsSelected(index: number) {
			let i = index;
			let array: number[] = [i];
			while (this.characterSubSet[i]) {
				array.push(i);
				if (this.characterSubSet[i].id == 0 && this.characterSubSet[i].character != "") {
					return false;
				}
				i += 5;
			}
			return true;
		}

		get rows() {
			const numberOfRows: number = Math.ceil(this.characters.length / 5);
			return Array(numberOfRows).fill(1);
		}
}
