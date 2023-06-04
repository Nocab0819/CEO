import { useState } from 'react';

function Footer() {
  const [isFooterVisible, setFooterVisible] = useState(true);

  const handleButtonClick = () => {
    setFooterVisible(false);
  };

  if (!isFooterVisible) {
    return null; // 如果 Footer 不可見，則返回 null，即不顯示 Footer
  }

  return (
    <footer className="footer py-2 background-blue" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 9999 }}>
      <div className="footer-container text-center">
        <small className="fw-light mb-0 yellow">本報告不提供任何投資建議。所有資料僅供信息和教育目的。<br />不應基於此處提供的信息做出任何投資決策，您對自己的投資決策完全負責。</small>
        <button className="close-button" onClick={handleButtonClick}>關閉</button>
      </div>
    </footer>
  );
}

export default Footer;
