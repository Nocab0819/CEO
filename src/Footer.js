function Footer() {
  return (
    <footer className="footer alert alert-warning alert-dismissible fade show" role="alert">
      <div className="footer-container text-center">
        <small className="fw-light mb-0 yellow footer-text">本報告不提供任何投資建議。所有資料僅供信息和教育目的。不應基於此處提供的信息做出任何投資決策，您對自己的投資決策完全負責。</small>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </footer>
  );
}