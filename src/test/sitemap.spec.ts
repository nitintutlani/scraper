import { expect }  from  "chai";
import { Sitemap } from  "../sitemap";

describe("Class Sitemap", function() {
	var smSingle = new Sitemap({kind: "sitemap", name: "smSingle", url: "www.example.com/page"});
	var smRange = new Sitemap({kind: "sitemap", url: "www.example.com/page/[1-5]", elements: [ {"kind": "text"}, {"kind": "link"} ]});
	var smJump = new Sitemap({kind: "sitemap", url: "www.example.com/page/[1-100:10]"});
	var smPad = new Sitemap({kind: "sitemap", url: "www.example.com/page/[001-003]"});

	describe("sitemap properties", function() {
		it("property kind", function() {
			expect(smSingle.kind).to.be.equal("sitemap");
		});
		it("property name", function() {
			expect(smSingle.name).to.be.equal("smSingle");
		});
		it("property elements", function() {
			var elements = smRange.elements;
			expect(elements).length(5);
			elements.forEach((elem) => {
				expect(elem.elements).length(2);
			});
		});
	});

	describe("method getUrls", function() {
		it("single page sitemap", function() {
			expect(smSingle.getUrls())
				.length(1)
				.contain("www.example.com/page");
		});
		it("page range", function() {
			expect(smRange.getUrls())
  			  .length(5)
  			  .contain("www.example.com/page/3");
		});
		it("page range jump", function() {
			expect(smJump.getUrls())
  			  .length(10)
  			  .contain("www.example.com/page/91");
		});
		it("page range pad", function() {
			expect(smPad.getUrls())
				.length(3)
				.contain("www.example.com/page/002");
		});
	});

});
