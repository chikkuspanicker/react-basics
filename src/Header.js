
import React from 'react';


export default function Header({ menuClick }) {
    const menu = [
        {
            text: "Home"
        },
        {
            text: "Features"
        },
        {
            text: "Pricing"
        },
        {
            text: "Opinions"
        }
    ]
    return (
        <header className="app-header">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        {
                            menu.map((menu_item, index) => <li key={index} className="nav-item">
                                <a
                                    onClick={() => {
                                        menuClick(menu_item.text);
                                    }}
                                    className="nav-link" href="#">{menu_item.text} </a>
                            </li>)
                        }
                    </ul>
                    <ul className="navbar-nav nav-flex-icons">
                        <li className="nav-item">
                            <a className="nav-link"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}
