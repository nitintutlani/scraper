var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var _ = require("lodash");
var element_1 = require("./element");
var Sitemap = (function (_super) {
    __extends(Sitemap, _super);
    function Sitemap() {
        _super.apply(this, arguments);
    }
    Sitemap.prototype.getUrls = function () {
        var urls = [];
        var re = /^(.*?)\[(\d+)\-(\d+)(:(\d+))?\](.*)$/;
        var matches = this._element.url.match(re);
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
                    urls.push(matches[1] + _.padLeft(i.toString(), startStr.length, "0") + matches[6]);
                }
                else {
                    urls.push(matches[1] + i + matches[6]);
                }
            }
        }
        else {
            urls.push(this._element.url);
        }
        return urls;
    };
    Object.defineProperty(Sitemap.prototype, "elements", {
        get: function () {
            var _this = this;
            return this.getUrls().map(function (url) {
                return {
                    kind: element_1.Kind.link,
                    url: url,
                    elements: _this._element.elements
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    return Sitemap;
})(element_1.Element);
exports.Sitemap = Sitemap;
