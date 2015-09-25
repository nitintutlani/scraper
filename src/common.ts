import { Kind ,IElement, Element } from "./element";
import { Sitemap } from "./sitemap";
import { Link } from "./link";
import { Text } from "./text";

export function createElement(element: IElement, parent? : Element): Element
{
	switch(element.kind) {
		case Kind.sitemap:
			return new Sitemap(element);
		case Kind.link:
			return new Link(element, parent);
		case Kind.text:
			return new Text(element, parent);
		default:
			throw new Error(`Unknown element kind ${element.kind}`);
	}
}
