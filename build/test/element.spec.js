var chai_1 = require("chai");
var element_1 = require("../element");
describe("Class Element", function () {
    var testElement = new element_1.Element({ kind: "someKind", name: "someElement", elements: [{ kind: "someChild" }, { kind: "someChild" }] });
    describe("element properties", function () {
        it("property kind", function () {
            chai_1.expect(testElement.kind).to.be.equal("someKind");
        });
        it("property name", function () {
            chai_1.expect(testElement.name).to.be.equal("someElement");
        });
        it("property elements", function () {
            var elements = testElement.elements;
            chai_1.expect(elements).length(2);
            elements.forEach(function (elem) {
                chai_1.expect(elem.kind).to.be.equal("someChild");
            });
        });
    });
});
