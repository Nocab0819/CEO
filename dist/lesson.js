function Lesson({
  url
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-md-3 pl-md-5 bd-content",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '764px'
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
export default Lesson;