import { expect }  from  "chai";
import { Page } from  "../page";

describe("Class Page", function() {
	var page1 = new Page({ url: "http://localhost:8081/page1.html"});

	describe("method getStatic", function() {
		it("page1.html", function(done) {
			page1.getStatic(function($) {
				expect($("div.item div.title").toArray()).length(10);
				done();
			});
		});
	});
});
