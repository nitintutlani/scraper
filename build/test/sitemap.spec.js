var chai_1 = require("chai");
var sitemap_1 = require("../sitemap");
describe("Class Sitemap", function () {
    var smSingle = new sitemap_1.Sitemap({ name: "test", url: "www.example.com/page" });
    var smRange = new sitemap_1.Sitemap({ name: "test", url: "www.example.com/page/[1-5]" });
    var smJump = new sitemap_1.Sitemap({ name: "test", url: "www.example.com/page/[1-100:10]" });
    var smPad = new sitemap_1.Sitemap({ name: "test", url: "www.example.com/page/[001-003]" });
    describe("method getUrls", function () {
        it("single page sitemap", function () {
            chai_1.expect(smSingle.getUrls())
                .length(1)
                .contain("www.example.com/page");
        });
        it("page range", function () {
            chai_1.expect(smRange.getUrls())
                .length(5)
                .contain("www.example.com/page/3");
        });
        it("page range jump", function () {
            chai_1.expect(smJump.getUrls())
                .length(10)
                .contain("www.example.com/page/91");
        });
        it("page range pad", function () {
            chai_1.expect(smPad.getUrls())
                .length(3)
                .contain("www.example.com/page/002");
        });
    });
});
