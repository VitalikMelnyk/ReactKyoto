import React from 'react';
import './Navigation.scss';
import { NavToggleMenu } from './TypeOfNavigation/NavToggleMenu';
import { UsualNav } from './TypeOfNavigation/UsualNav';


export const Navigation = () => {
    return (
        // Navigation
        <div className="hamburger-menu">
            {/*  Toggle menu burger */}
            <NavToggleMenu />
            {/* <!-- USUAL NAVIGATION --> */}
            <UsualNav />
        </div>
    )
}

