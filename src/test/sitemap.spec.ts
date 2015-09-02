import { expect }  from 'chai';
import { Sitemap } from '../sitemap';

var test1 = new Sitemap('test1', 'www.example.com/page');
var test2 = new Sitemap('test1', 'www.example.com/page/[1-5]');
var test3 = new Sitemap('test1', 'www.example.com/page/[1-100:10]');

describe('Sitemap', function() {
  it('new Sitemap', function() {
    expect(test1.getUrls()).length(1);
	expect(test1.getUrls()).contain('www.example.com/page');
	expect(test2.getUrls()).length(5);
	expect(test2.getUrls()).contain('www.example.com/page/3');
	expect(test3.getUrls()).length(10);
	expect(test3.getUrls()).contain('www.example.com/page/91');
  });
});
