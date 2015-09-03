var common_1 = require("./common");
var page_1 = require("./page");
var Sitemap = (function () {
    function Sitemap(sitemap) {
        this.name = sitemap.name;
        this.url = sitemap.url;
        this.elements = sitemap.elements;
    }
    Sitemap.prototype.getUrls = function () {
        var urls = [];
        var re = /^(.*?)\[(\d+)\-(\d+)(:(\d+))?\](.*)$/;
        var matches = this.url.match(re);
        if (matches) {
            var startStr = matches[2];
            var endStr = matches[3];
            var start = parseInt(startStr);
            var end = parseInt(endStr);
            var incremental = 1;
            if (matches[5] !== undefined) {
                incremental = parseInt(matches[5]);
            }
            for (var i = start; i <= end; i += incremental) {
                if (startStr.length === endStr.length) {
                    urls.push(matches[1] + common_1.lpad(i.toString(), startStr.length) + matches[6]);
                }
                else {
                    urls.push(matches[1] + i + matches[6]);
                }
            }
        }
        else {
            urls.push(this.url);
        }
        return urls;
    };
    Sitemap.prototype.getPages = function () {
        var _this = this;
        return this.getUrls().map(function (url) { return new page_1.Page(url, _this.elements); });
    };
    return Sitemap;
})();
exports.Sitemap = Sitemap;
