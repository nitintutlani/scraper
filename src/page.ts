// // import { IElement, Element } from "./element";
// import * as request  from "request";
// var cheerio: CheerioAPI = require("cheerio");
// // import * as cheerio from "cheerio";
//
// export interface IPage {
// 	url: string;
// 	// elements: IElement[];
// }
//
// export class Page {
// 	public url: string;
//
// 	constructor(page: IPage) {
// 		this.url = page.url;
// 	}
//
// 	getStatic( callback: ($: CheerioStatic ) => void ) {
// 		request.get(this.url, function(error, response, body) {
// 			if ( ! error && response.statusCode == 200) {
// 				callback(cheerio.load(body));
// 			}
// 		});
// 	}
// 	//@todo getDynamic method will load url in phantomjs browser and return $: JQueryStatic instance
//
// 	// getElements() {
// 	// 	return this.elements.map( (element) => new Element(element));
// 	// }
// }
