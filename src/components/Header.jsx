import React from 'react'
import '../styles/header.css';

function Header() {
    const images = require.context('../../public/icons', true);
    return (
        <div className="marco_container">
            <div className="marco">
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <h4>File</h4>
                <h4>Edit</h4>
                <h4>Selection</h4>
                <h4>Terminal</h4>
                <h4>Help</h4>
                <img src={images('./vscode.svg').default} alt="" />
            </div>
        </div>
    )
};

export default Header;
