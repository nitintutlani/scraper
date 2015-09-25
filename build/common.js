var element_1 = require("./element");
var sitemap_1 = require("./sitemap");
var link_1 = require("./link");
var text_1 = require("./text");
function createElement(element, parent) {
    switch (element.kind) {
        case element_1.Kind.sitemap:
            return new sitemap_1.Sitemap(element);
        case element_1.Kind.link:
            return new link_1.Link(element, parent);
        case element_1.Kind.text:
            return new text_1.Text(element, parent);
        default:
            throw new Error("Unknown element kind " + element.kind);
    }
}
exports.createElement = createElement;
