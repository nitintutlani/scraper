var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var element_1 = require("./element");
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        _super.apply(this, arguments);
    }
    Text.prototype.getElements = function () {
        return [];
    };
    return Text;
})(element_1.Element);
exports.Text = Text;
