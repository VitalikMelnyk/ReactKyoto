
import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import './UsualNav.scss';

export const UsualNav = () => {
    return (
        <Fragment>
            {/* <!-- USUAL NAVIGATION --> */}
            <ul className="nav-list">
                <li className="nav-item">
                    {/* <a href="introduction.html" className="nav-item-NavLink">Home</a> */}
                    <NavLink exact to="/" activeClassName="active" className="nav-item-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/sushi" activeClassName="active" className="nav-item-link">Sushi</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/uber-uns" activeClassName="active" className="nav-item-link">Über uns</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contacts" activeClassName="active" className="nav-item-link">Contacts</NavLink>
                </li>
            </ul>
        </Fragment>
    )
};

