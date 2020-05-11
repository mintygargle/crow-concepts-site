"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SecondaryButton = _interopRequireDefault(require("./SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  box-shadow: none;\n  height: fit-content;\n\n  a {\n    color: ", ";\n  }\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(85%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SecondaryButton = (0, _styledComponents["default"])(_SecondaryButton["default"])(_templateObject(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.border_radius;
}, function (props) {
  return props.theme.primary;
});
var _default = SecondaryButton;
exports["default"] = _default;

//# sourceMappingURL=SecondaryButton.styled.js.map