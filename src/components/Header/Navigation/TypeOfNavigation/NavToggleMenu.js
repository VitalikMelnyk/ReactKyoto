import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './NavToggleMenu.scss';

export const NavToggleMenu = () => {
    return (
        <Fragment>
            {/*  ToggleBurgerMenu */}
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-btn" htmlFor="menu-toggle">
                <span></span>
            </label>
            {/* <!-- NAVIGATION FOR BURGER MENU --> */}
            <ul className="menu-box">
                <li className="menu-item">
                    <Link to="/" className="menu-item-link">Home</Link>
                    {/* <a href="introduction.html" className="menu-item-link">Home</a> */}
                </li>
                <li className="menu-item">
                    <Link to="/sushi" className="menu-item-link">Sushi</Link>
                </li>
                <li className="menu-item">

                    <Link to="/uber-uns" className="menu-item-link">Über uns</Link>
                </li>
                <li className="menu-item">
                    <Link to="/contacts" className="menu-item-link">Contacts</Link>
                </li>
            </ul>
        </Fragment>
    )
}

