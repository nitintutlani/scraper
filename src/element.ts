export var Kind = {
	sitemap: "sitemap",
	link: "link",
	text: "text"
};

export interface IElement {
	kind: string;
	name?: string;
	elements?: IElement[];
	url?: string;
	selector?: string;
}

export class Element
{
	/**
	* Override this static property on elements like click that need phantomjs for loading their parent Link
	*/
	protected static dynamic = false;

	constructor(protected _element: IElement, protected _parent?: Element) {}

	get kind() {
		return this._element.kind;
	}

	get name() {
		return this._element.name;
	}

	get elements(): IElement[]
	{
		return this._element.elements;
	}

	fetchData( callback: (err: Error, data?: any) => void ): void
	{
		callback(new Error("Element does not have implementation for fetchData"));
	}
}
