"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function ChangeLesson(_ref) {
  var lastlesson = _ref.lastlesson,
    nextlesson = _ref.nextlesson,
    lastname = _ref.lastname,
    nextname = _ref.nextname;
  return /*#__PURE__*/React.createElement("div", {
    className: "btn-group botton-buttom margin-auto",
    role: "group",
    "aria-label": "Basic checkbox toggle button group botton-buttom"
  }, /*#__PURE__*/React.createElement("a", {
    href: lastlesson,
    className: "btn btn-secondary btn-sm",
    role: "button"
  }, lastname), /*#__PURE__*/React.createElement("a", {
    href: nextlesson,
    className: "btn btn-secondary btn-sm",
    role: "button"
  }, nextname));
}
var _default = ChangeLesson;
exports["default"] = _default;