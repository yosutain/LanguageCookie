import { Injectable } from '@angular/core';
import { Character } from './character';

@Injectable()
export class HiraganaService {

	characters: Character[] = [
	{character:"あ", romanized:"a", ipa:"a", id: 1},
	{character:"い", romanized:"i", ipa:"i", id: 2},
	{character:"う", romanized:"u", ipa:"u͍", id: 3},
	{character:"え", romanized:"e", ipa:"e", id: 4},
	{character:"お", romanized:"o", ipa:"o", id: 5},

	{character:"か", romanized:"ka", ipa:"ka", id: 6},
	{character:"き", romanized:"ki", ipa:"ki", id: 7},
	{character:"く", romanized:"ku", ipa:"ku͍", id: 8},
	{character:"け", romanized:"ke", ipa:"ke", id: 9},
	{character:"こ", romanized:"ko", ipa:"ko", id: 10},

	{character:"さ", romanized:"sa", ipa:"sa", id: 11},
	{character:"し", romanized:"shi", ipa:"ɕi", id: 12},
	{character:"す", romanized:"su", ipa:"su͍", id: 13},
	{character:"せ", romanized:"se", ipa:"se", id: 14},
	{character:"そ", romanized:"so", ipa:"so", id: 15},

	{character:"た", romanized:"ta", ipa:"ta", id: 16},
	{character:"ち", romanized:"chi", ipa:"t͡ɕi", id: 17},
	{character:"つ", romanized:"tsu", ipa:"t͡su͍", id: 18},
	{character:"て", romanized:"te", ipa:"te", id: 19},
	{character:"と", romanized:"to", ipa:"to", id: 20},

	{character:"な", romanized:"na", ipa:"na", id: 21},
	{character:"に", romanized:"ni", ipa:"nʲi", id: 22},
	{character:"ぬ", romanized:"nu", ipa:"nu͍", id: 23},
	{character:"ね", romanized:"ne", ipa:"ne", id: 24},
	{character:"の", romanized:"no", ipa:"no", id: 25},

	{character:"は", romanized:"ha", ipa:"ha", id: 26},
	{character:"ひ", romanized:"hi", ipa:"çi", id: 27},
	{character:"ふ", romanized:"fu", ipa:"ɸɯ", id: 28},
	{character:"へ", romanized:"he", ipa:"he", id: 29},
	{character:"ほ", romanized:"ho", ipa:"ho", id: 30},

	{character:"ま", romanized:"ma", ipa:"ma", id: 31},
	{character:"み", romanized:"mi", ipa:"mi", id: 32},
	{character:"む", romanized:"mu", ipa:"mu͍", id: 33},
	{character:"め", romanized:"me", ipa:"me", id: 34},
	{character:"も", romanized:"mo", ipa:"mo", id: 35},

	{character:"や", romanized:"ya", ipa:"ja", id: 36},
	{character:"ゆ", romanized:"yu", ipa:"ju͍", id: 37},
	{character:"よ", romanized:"yo", ipa:"jo", id: 38},
	{character:"", romanized:"", id: 0},
	{character:"", romanized:"", id: 0},

	{character:"ら", romanized:"ra", ipa:"ɾa", id: 39},
	{character:"り", romanized:"ri", ipa:"ɾʲi", id: 40},
	{character:"る", romanized:"ru", ipa:"ɾɯ", id: 41},
	{character:"れ", romanized:"re", ipa:"ɾe", id: 42},
	{character:"ろ", romanized:"ro", ipa:"ɾo", id: 43},

	{character:"わ", romanized:"wa", ipa:"wa", id: 44},
	{character:"を", romanized:"wo", ipa:"o", id: 45},
	{character:"ん", romanized:"n", ipa:"ɴ", id: 46},
	{character:"", romanized:"", id: 0},
	{character:"", romanized:"", id: 0},
	];
	
	constructor() {}

	getAllCharacters(): Character[] {
    	return this.characters;
	}

	getCharacterByRomaji(romaji: string): Character {
    	return this.characters
    	.filter(character => character.romanized === romaji)
    	.pop();
	}

	getCharacterById(id: number): Character {
    	return this.characters
    	.filter(character => character.id === id)
    	.pop();
	}

}
