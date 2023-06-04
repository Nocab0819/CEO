"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Footer() {
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isFooterVisible = _useState2[0],
    setFooterVisible = _useState2[1];
  var handleButtonClick = function handleButtonClick() {
    setFooterVisible(false);
  };
  if (!isFooterVisible) {
    return null; // 如果 Footer 不可見，則返回 null，即不顯示 Footer
  }

  return /*#__PURE__*/React.createElement("footer", {
    className: "footer py-2 background-blue",
    style: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 9999
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-container text-center"
  }, /*#__PURE__*/React.createElement("small", {
    className: "fw-light mb-0 yellow"
  }, "\u672C\u5831\u544A\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u6295\u8CC7\u5EFA\u8B70\u3002\u6240\u6709\u8CC7\u6599\u50C5\u4F9B\u4FE1\u606F\u548C\u6559\u80B2\u76EE\u7684\u3002", /*#__PURE__*/React.createElement("br", null), "\u4E0D\u61C9\u57FA\u65BC\u6B64\u8655\u63D0\u4F9B\u7684\u4FE1\u606F\u505A\u51FA\u4EFB\u4F55\u6295\u8CC7\u6C7A\u7B56\uFF0C\u60A8\u5C0D\u81EA\u5DF1\u7684\u6295\u8CC7\u6C7A\u7B56\u5B8C\u5168\u8CA0\u8CAC\u3002"), /*#__PURE__*/React.createElement("button", {
    className: "close-button",
    onClick: handleButtonClick
  }, "\u95DC\u9589")));
}
var _default = Footer;
exports["default"] = _default;