import React from 'react';
import './header.scss';

function Header(props = {}) {
    return (
        <header className="header">
            <div className="header_wrap">
                <img src={props.logo} alt="logo" />
            </div>
        </header>
    );
}

export default Header;
