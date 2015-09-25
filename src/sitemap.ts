import * as _ from "lodash";
import { Kind, IElement, Element } from "./element";
import { createElement } from "./common";
import { Link }  from "./link";

export class Sitemap extends Element {

	getUrls(): string[]
	{
		var urls: string[] = [];
		var re = /^(.*?)\[(\d+)\-(\d+)(:(\d+))?\](.*)$/;
		var matches = this._element.url.match(re);
		if(matches) {
			var startStr = matches[2];
			var endStr = matches[3];
			var start = parseInt(startStr);
			var end = parseInt(endStr);
			var incremental = 1;
			if(matches[5] !== undefined) {
				incremental = parseInt(matches[5]);
			}
			for ( var i = start; i <= end; i+=incremental ) {
				// with zero padding
				if(startStr.length === endStr.length) {
					urls.push(matches[1] + _.padLeft(i.toString(), startStr.length, "0") + matches[6]);
				}
				else {
					urls.push(matches[1]+i+matches[6]);
				}
			}
		} else {
			urls.push(this._element.url);
		}
		return urls;
	}

	/**
	* This class introduces an extra layer of link elements on top of supplied elements
	*/
	get elements(): IElement[] {
		return this.getUrls().map((url) => {
			return {
				kind: Kind.link,
				url: url,
				elements: this._element.elements
			};
		});
	}
}
