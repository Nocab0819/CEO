function Footer() {
    return (
      <footer className="alert alert-warning alert-dismissible fade show background-blue" role="alert" style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 9999 }}>
        <div className="footer-container text-center">
          <small className="fw-light mb-0 yellow">本報告不提供任何投資建議。所有資料僅供信息和教育目的。<br />不應基於此處提供的信息做出任何投資決策，您對自己的投資決策完全負責。</small>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </footer>
    );
  }