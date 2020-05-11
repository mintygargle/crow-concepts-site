"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PrimaryButton = _interopRequireDefault(require("./PrimaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  box-shadow: none;\n  height: fit-content;\n  &:hover {\n    //background-color: lighten(", ", 20%);\n    filter: brightness(120%);\n  }\n\n  &:active {\n    filter: brightness(85%);\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PrimaryButton = (0, _styledComponents["default"])(_PrimaryButton["default"])(_templateObject(), function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.font_light;
}, function (props) {
  return props.theme.border_radius;
}, function (props) {
  return props.theme.primary;
});
var _default = PrimaryButton;
exports["default"] = _default;

//# sourceMappingURL=PrimaryButton.styled.js.map