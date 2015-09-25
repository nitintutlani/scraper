import { Element } from "./element";

export class Text extends Element {

	/**
	* Text element cannot have sub-elements
	*/
	getElements(): Element[] {
		return [];
	}

}
