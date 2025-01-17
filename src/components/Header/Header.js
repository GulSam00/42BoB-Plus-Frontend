import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="gnb">
      <div className="inner">
        <a href="/" className="logo">
          <img src="assets/42bobs_logo.png" alt="42BoBs" />
        </a>
        <div className="sub-menu">
          <ul className="menu">
            <li className="mypage">
              <a href="/mypage">chahan</a>
            </li>
            <li className="chatting">
              <a href="/chatting">채팅</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
