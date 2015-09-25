import { expect }  from  "chai";
import { Element } from "../element";

describe("Class Element", () => {

	var testElement = new Element({kind: "someKind", name: "someElement", elements: [ {kind: "someChild"}, {kind: "someChild"} ]});

	describe("element properties", () => {

		it("property kind", () => {
			expect(testElement.kind).to.be.equal("someKind");
		});

		it("property name", () => {
			expect(testElement.name).to.be.equal("someElement");
		});

		it("property elements", () => {
			var elements = testElement.elements;
			expect(elements).length(2);
			elements.forEach((elem) => {
				expect(elem.kind).to.be.equal("someChild");
			});
		});

	});
});
