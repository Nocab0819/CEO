"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function Lesson(_ref) {
  var url = _ref.url;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "py-md-3 pl-md-5 bd-content",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 118px)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: url,
    style: {
      width: '800px',
      height: '100%',
      border: 'none'
    }
  })));
}
var _default = Lesson;
exports["default"] = _default;