var Element = (function () {
    function Element(element) {
        this.type = element.type;
        this.name = element.name;
        this.selector = element.selector;
        this.multiple = element.multiple;
    }
    return Element;
})();
exports.Element = Element;
