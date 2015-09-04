
export interface IElement {
	type: string;
	name: string;
	selector: string;
	multiple: boolean;
}

export class Element {
	public type: string;
	public name: string;
	public selector: string;
	public multiple: boolean;
	constructor(element: IElement) {
		this.type = element.type;
		this.name = element.name;
		this.selector = element.selector;
		this.multiple = element.multiple;
	}
}
