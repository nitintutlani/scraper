{	kind: sitemap
	url: www.site.com/page[1-3]
	elements: [
		{
			kind: text
			selector: "span.full_name"
		},
		{
			kind: link
			selector: "a.detail"
			elements: [
				{
					kind: text
					selector: "span.address"
				},
				{
					kind: text
					selector: "span.phone"
				}
			]
		}
	]
}

Sitemap
	Link1
		text (span.full_name)
		link (a.detail)
			text (span.address)
			text (span.phone)
	Link2
		text (span.full_name)
		link
			text (span.address)
			text (span.phone)
	Link3
		text (span.full_name)
		link
			text (span.address)
			text (span.phone)


sitemap -> elements = [link1, link2, link3]
link1 -> elements = [text (span.full_name), link (a.detail)]
text (span.full_name) -> elements = []
link (a.detail) -> elements = [text (span.address), text (span.phone)]

-> elements fetches elements through deferred callback.
Link fetch will check a click|scroll object in its elements and will load dynamic phantomjs to fetch elements.

do we need fetchElements? NO! we just need a getElements without callback.

fetchData on link uses request|phantom to load url
