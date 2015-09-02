var chai_1 = require('chai');
var sitemap_1 = require('../sitemap');
var test1 = new sitemap_1.Sitemap('test1', 'www.example.com/page');
var test2 = new sitemap_1.Sitemap('test1', 'www.example.com/page/[1-5]');
var test3 = new sitemap_1.Sitemap('test1', 'www.example.com/page/[1-100:10]');
describe('Sitemap', function () {
    it('new Sitemap', function () {
        chai_1.expect(test1.getUrls()).length(1);
        chai_1.expect(test1.getUrls()).contain('www.example.com/page');
        chai_1.expect(test2.getUrls()).length(5);
        chai_1.expect(test2.getUrls()).contain('www.example.com/page/3');
        chai_1.expect(test3.getUrls()).length(10);
        chai_1.expect(test3.getUrls()).contain('www.example.com/page/91');
    });
});
