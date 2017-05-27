import { Component, Input, Output, EventEmitter, 
	OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Character } from './../character';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.less'],
  host: {'(window:keyup)': 'keyHandler($event.key)'},
})
export class MultipleChoiceComponent implements OnInit, OnChanges {
	@Input() characters: Character[];
	@Input() characterSubSet: Character[];
	@Output() selectedCharacter: EventEmitter<number> = new EventEmitter();
	@Output() selectedPopup: EventEmitter<string> = new EventEmitter();
	
	characterChoices: Character[];
	correctCharacter: Character;
	answerCharacter: Character = {id: 0, character:"", romanized:""};
	amountOfChoices: number = 4;
	choiceAndAnswerType: number = 1;
	useCharacterSubSet: boolean = true;

	constructor() {}

	setCharacterSubSet() {
		this.useCharacterSubSet = this.useCharacterSubSet ? false : true;
	}

	keyHandler(key: any) {
		if (key > 0 && key <= this.amountOfChoices) {
			this.selectCharacter(this.characterChoices[key - 1]);
		} else if (key == "Enter" || key == " ") {
			this.generateCharacterChoices()
		}
    }

    openPopup(popup: string) {
		this.selectedPopup.emit(popup);
    }

	changeAmountOfCharacters(amountOfChoices: number) {
		let characterChoices: any = document.getElementById("characterChoices");
		const width: number = characterChoices.offsetWidth / amountOfChoices;
		let columns: string = "";
		for (let i = 0; i < amountOfChoices; ++i) {
			columns += width + "px ";
		}
		characterChoices.style.gridTemplateColumns = columns;
		this.amountOfChoices = amountOfChoices;
		this.generateCharacterChoices();
    }

    changeChoiceAndAnswerType(type: number) {
		this.choiceAndAnswerType = type;
    }

	selectCharacter(character: Character) {
		if (this.answerCharacter.id == 0) {
			this.answerCharacter = character;
		}
		this.selectedCharacter.emit(character.id);
    }

    generateCharacterChoices() {
    	const characterSet = this.useCharacterSubSet ? this.characterSubSet : this.characters;
    	const amountOfChoices: number = this.amountOfChoices;
    	let characters: Character[] = [];
		let i = characterSet.length;
		while(i--) characters[i] = characterSet[i];

    	for (let i = 0; i < characters.length; ++i) {
    		if (characters[i].id == 0) {
				characters.splice(i, 1);
				if (i >= 0) { i-- }
    		}
		}

		if (characters.length < amountOfChoices) {
			characters = [
			{id: 0, character:"ʕ•ᴥ•ʔ", romanized:"ʕ•ᴥ•ʔ"},
			{id: 0, character:"ʕ•ᴥ•ʔ", romanized:"ʕ•ᴥ•ʔ"},
			{id: 0, character:"ʕ•ᴥ•ʔ", romanized:"ʕ•ᴥ•ʔ"},
			{id: 0, character:"ʕ•ᴥ•ʔ", romanized:"ʕ•ᴥ•ʔ"},
			{id: 0, character:"ʕ•ᴥ•ʔ", romanized:"ʕ•ᴥ•ʔ"},
			{id: 0, character:"ʕ•ᴥ•ʔ", romanized:"ʕ•ᴥ•ʔ"},
			{id: 0, character:"ʕ•ᴥ•ʔ", romanized:"ʕ•ᴥ•ʔ"},
			{id: 0, character:"ʕ•ᴥ•ʔ", romanized:"ʕ•ᴥ•ʔ"},
			{id: 0, character:"ʕ•ᴥ•ʔ", romanized:"ʕ•ᴥ•ʔ"},];
		}

    	let characterChoices: Character[] = [];
    	let randomCharacterNumber: number;
    	for (let i = 0; i < amountOfChoices; ++i) {
    		randomCharacterNumber = Math.floor(Math.random() * characters.length);
			characterChoices.push(characters[randomCharacterNumber]);
			characters.splice(randomCharacterNumber, 1);
		}
		this.characterChoices = characterChoices;

		const correctCharacterNumber = Math.floor(Math.random() * amountOfChoices);
		this.correctCharacter = characterChoices[correctCharacterNumber];
		this.answerCharacter = {id: 0, character:"", romanized:""};
	}

	ngOnInit(): void {
		this.generateCharacterChoices();
	}
	ngOnChanges(changes: SimpleChanges) {
    	this.generateCharacterChoices();
	}
}
