import { Component } from '@angular/core';
import { HiraganaService } from './hiragana.service';
import { KatakanaService } from './katakana.service';
import { HangulService } from './hangul.service';
import { FutharkService } from './futhark.service';
import { SanskritService } from './sanskrit.service';
import { CyrillicService } from './cyrillic.service';
import { ThaiService } from './thai.service';
import { Character } from './character';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	providers: [KatakanaService, HiraganaService, KatakanaService, 
	HangulService, FutharkService, SanskritService, CyrillicService,
	ThaiService],
})

export class AppComponent {
	popup = "none";
	selectedCharacterSet: number = 1;
	selectedCharacter: number = 0;
	selectedGameId: number = 1;
	characterSubSets: [Character[]] = [[],[],[],[],[],[],[]];

	constructor(private katakanaService: KatakanaService,
		private hiraganaService: HiraganaService,
		private hangulService: HangulService,
		private futharkService: FutharkService,
		private sanskritService: SanskritService,
		private cyrillicService: CyrillicService,
		private thaiService: ThaiService,) {}

	openPopup(popup: string) {
		this.popup = popup;
	}

	selectCharacterSet(characterSet: number) {
		this.selectedCharacter = 0;
		this.selectedCharacterSet = characterSet;
	}

	updateCharacterSubSet(characterSubSet: Character[]) {
		this.characterSubSets[this.selectedCharacterSet - 1] = characterSubSet;
	}

	selectCharacter(id: number) {
		this.selectedCharacter = id;
	}

	selectGame(id: number) {
		this.selectedGameId = id;
	}

	get characters() {
		if (this.selectedCharacterSet == 1) {
			return this.hiraganaService.getAllCharacters();
		} else if (this.selectedCharacterSet == 2) {
			return this.katakanaService.getAllCharacters();
		} else if (this.selectedCharacterSet == 3) {
			return this.hangulService.getAllCharacters();
		} else if (this.selectedCharacterSet == 4) {
			return this.futharkService.getAllCharacters();
		} else if (this.selectedCharacterSet == 5) {
			return this.sanskritService.getAllCharacters();
		} else if (this.selectedCharacterSet == 6) {
			return this.cyrillicService.getAllCharacters();
		} else if (this.selectedCharacterSet == 7) {
			return this.thaiService.getAllCharacters();
		}
	}

	get characterSubSet() {
		if (this.characterSubSets[this.selectedCharacterSet - 1].length < 1) {
			let characterArray: Character[];
			switch (this.selectedCharacterSet) {
				case 1: characterArray = this.hiraganaService.getAllCharacters();
					break;
				case 2: characterArray = this.katakanaService.getAllCharacters();
					break;
				case 3: characterArray = this.hangulService.getAllCharacters();
					break;
				case 4: characterArray = this.futharkService.getAllCharacters();
					break;
				case 5: characterArray = this.sanskritService.getAllCharacters();
					break;
				case 6: characterArray = this.cyrillicService.getAllCharacters();
					break;
				case 7: characterArray = this.thaiService.getAllCharacters();
					break;
			}
			this.characterSubSets[this.selectedCharacterSet - 1] = JSON.parse(JSON.stringify(characterArray));
		}
		return this.characterSubSets[this.selectedCharacterSet - 1];
	}

	get character() {
		if (this.selectedCharacter == 0) {
			return {character:"", romanized:"", id: 0};
		}
		if (this.selectedCharacterSet == 1) {
			return this.hiraganaService.getCharacterById(this.selectedCharacter);
		} else if (this.selectedCharacterSet == 2) {
			return this.katakanaService.getCharacterById(this.selectedCharacter);
		} else if (this.selectedCharacterSet == 3) {
			return this.hangulService.getCharacterById(this.selectedCharacter);
		} else if (this.selectedCharacterSet == 4) {
			return this.futharkService.getCharacterById(this.selectedCharacter);
		} else if (this.selectedCharacterSet == 5) {
			return this.sanskritService.getCharacterById(this.selectedCharacter);
		} else if (this.selectedCharacterSet == 6) {
			return this.cyrillicService.getCharacterById(this.selectedCharacter);
		} else if (this.selectedCharacterSet == 7) {
			return this.thaiService.getCharacterById(this.selectedCharacter);
		}
	}

}
