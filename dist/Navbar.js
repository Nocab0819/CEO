"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function Navbar() {
  return /*#__PURE__*/React.createElement("nav", {
    "class": "navbar background-blue navbar-expand-lg navbar-dark bg-dar"
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("img", {
    className: "logo-pic",
    src: "img/CEOlogo.png",
    alt: "LOGO"
  }), "\u2002\u2002\u2002CEO\u9996\u5E2D\u6559\u80B2"), /*#__PURE__*/React.createElement("button", {
    "class": "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarTogglerDemo02",
    "aria-controls": "navbarTogglerDemo02",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "navbar-toggler-icon"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "collapse navbar-collapse",
    id: "navbarTogglerDemo02"
  }, /*#__PURE__*/React.createElement("ul", {
    "class": "navbar-nav mr-auto mt-2 mt-lg-0"
  }, /*#__PURE__*/React.createElement("li", {
    "class": "nav-item active"
  }, /*#__PURE__*/React.createElement("a", {
    "class": "nav-link",
    href: "index.html"
  }, "\u9996\u9801 ", /*#__PURE__*/React.createElement("span", {
    "class": "sr-only"
  }, "(current)"))), /*#__PURE__*/React.createElement("li", {
    "class": "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    "class": "nav-link",
    href: "#"
  }, "\u95DC\u65BC\u6211\u5011")), /*#__PURE__*/React.createElement("li", {
    "class": "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    "class": "nav-link",
    href: "#"
  }, "\u5B78\u7FD2\u8CC7\u6E90")), /*#__PURE__*/React.createElement("li", {
    "class": "nav-item dropdown"
  }, /*#__PURE__*/React.createElement("a", {
    "class": "nav-link dropdown-toggle",
    href: "#",
    id: "navbarDropdownMenuLink",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "\u8AB2\u7A0B\u6E05\u55AE"), /*#__PURE__*/React.createElement("div", {
    "class": "dropdown-menu",
    "aria-labelledby": "navbarDropdownMenuLink"
  }, /*#__PURE__*/React.createElement("a", {
    "class": "dropdown-item",
    href: "#"
  }, "\u7E3D\u89BD"), /*#__PURE__*/React.createElement("a", {
    "class": "dropdown-item",
    href: "unit1.html"
  }, "UNIT 1"), /*#__PURE__*/React.createElement("a", {
    "class": "dropdown-item",
    href: "unit2.html"
  }, "UNIT 2"), /*#__PURE__*/React.createElement("a", {
    "class": "dropdown-item",
    href: "unit3.html"
  }, "UNIT 3"), /*#__PURE__*/React.createElement("a", {
    "class": "dropdown-item",
    href: "unit4.html"
  }, "UNIT 4"), /*#__PURE__*/React.createElement("a", {
    "class": "dropdown-item",
    href: "unit5.html"
  }, "UNIT 5"), /*#__PURE__*/React.createElement("a", {
    "class": "dropdown-item",
    href: "unit6.html"
  }, "UNIT 6"), /*#__PURE__*/React.createElement("a", {
    "class": "dropdown-item",
    href: "unit7.html"
  }, "UNIT 7"), /*#__PURE__*/React.createElement("a", {
    "class": "dropdown-item",
    href: "unit8.html"
  }, "UNIT 8")))), /*#__PURE__*/React.createElement("form", {
    "class": "form-inline my-2 my-lg-0"
  }, /*#__PURE__*/React.createElement("input", {
    "class": "form-control mr-sm-2",
    type: "search",
    placeholder: "Search"
  }), /*#__PURE__*/React.createElement("button", {
    "class": "btn btn-outline-success my-2 my-sm-0",
    type: "submit"
  }, "\u641C\u5C0B"))));
}
var _default = Navbar;
exports["default"] = _default;