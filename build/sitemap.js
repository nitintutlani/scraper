var common_1 = require('./common');
var Sitemap = (function () {
    function Sitemap(name, url) {
        this.name = name;
        this.url = url;
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
    return Sitemap;
})();
exports.Sitemap = Sitemap;
