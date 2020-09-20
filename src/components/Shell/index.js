import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import './shell.scss';

function Shell(props) {
    return (
        <div>
            <Header logo="https://raw.githubusercontent.com/raaj-obuli/shuffle-and-sort/master/logo.png" />
            <main className="content">
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Shell;
