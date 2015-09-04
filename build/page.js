var request = require("request");
var cheerio = require("cheerio");
var Page = (function () {
    function Page(page) {
        this.url = page.url;
    }
    Page.prototype.getStatic = function (callback) {
        request.get(this.url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                callback(cheerio.load(body));
            }
        });
    };
    return Page;
})();
exports.Page = Page;
