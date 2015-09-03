import { expect }  from  'chai';
import { Sitemap } from  '../sitemap';

describe('Sitemap', function() {
	describe('single page', function() {
		var sitemap = new Sitemap('test', 'www.example.com/page');
		it('single page', function() {
			expect(sitemap.getUrls())
				.length(1)
				.contain('www.example.com/page');
		});
	});
	describe('page range', function() {
		var sitemap = new Sitemap('test1', 'www.example.com/page/[1-5]');
		it('page range',function  () {
		  expect(sitemap.getUrls())
			  .length(5)
			  .contain('www.example.com/page/3');
		});
	});
	describe('page range jump', function() {
		var sitemap = new Sitemap('test1', 'www.example.com/page/[1-100:10]');
		it('page range jump',function  () {
		  expect(sitemap.getUrls())
			  .length(10)
			  .contain('www.example.com/page/91');
		});
	});
});
