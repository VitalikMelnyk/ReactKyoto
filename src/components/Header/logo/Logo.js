import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './Logo.scss';
const logo = require("../../../assets/logo/logo.png");

export const Logo = () => {
    return (
        <Fragment>
            <Link className="brand" to="/">
                <img src={logo} alt="logo" className="img-logo" />
            </Link>
        </Fragment>
    )
}
