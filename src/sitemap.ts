import { lpad } from "./common";
import { Page } from "./page";
import { IElement } from "./element";

export interface ISitemap {
	name: string;
	url: string;
	elements?: IElement[];
}

export class Sitemap
{
	public name: string;
	public url: string;
	public elements: IElement[];

	constructor(sitemap: ISitemap) {
		this.name = sitemap.name;
		this.url = sitemap.url;
		this.elements = sitemap.elements;
	}

	getUrls() {
		var urls: string[] = [];
		var re = /^(.*?)\[(\d+)\-(\d+)(:(\d+))?\](.*)$/;
		var matches = this.url.match(re);
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
					urls.push(matches[1]+lpad(i.toString(), startStr.length)+matches[6]);
				}
				else {
					urls.push(matches[1]+i+matches[6]);
				}
			}
		} else {
			urls.push(this.url);
		}
		return urls;
	}

	getPages() {
		return this.getUrls().map( (url) => new Page(url, this.elements) );
	}
}
