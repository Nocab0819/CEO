function ChangeLesson({
  lastlesson,
  nextlesson,
  lastname,
  nextname
}) {
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
export default ChangeLesson;