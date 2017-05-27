export class Character {
	id: number;
	character: string;
	romanized: string;
	ipa?: string;
	aspirate?: boolean;
	pronounciation?: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
