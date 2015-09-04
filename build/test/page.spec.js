var chai_1 = require("chai");
var page_1 = require("../page");
describe("Class Page", function () {
    var page1 = new page_1.Page({ url: "http://localhost:8081/page1.html" });
    describe("method getStatic", function () {
        it("page1.html", function (done) {
            page1.getStatic(function ($) {
                chai_1.expect($("div.item div.title").toArray()).length(10);
                done();
            });
        });
    });
});
