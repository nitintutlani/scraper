exports.Kind = {
    sitemap: "sitemap",
    link: "link",
    text: "text"
};
var Element = (function () {
    function Element(_element, _parent) {
        this._element = _element;
        this._parent = _parent;
    }
    Object.defineProperty(Element.prototype, "kind", {
        get: function () {
            return this._element.kind;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "name", {
        get: function () {
            return this._element.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "elements", {
        get: function () {
            return this._element.elements;
        },
        enumerable: true,
        configurable: true
    });
    Element.prototype.fetchData = function (callback) {
        callback(new Error("Element does not have implementation for fetchData"));
    };
    Element.dynamic = false;
    return Element;
})();
exports.Element = Element;
