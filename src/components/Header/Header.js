import React from 'react';
import { Logo } from './logo/Logo';
import { Navigation } from './Navigation/Navigation';


export const Header = () => {
    return (
        <div className="row justify-content-between">
            {/* <!-- lOGO --> */}
            <div className="col-xs-5 col-sm-4 col-md-3">
                <Logo />
            </div>
            {/* Navigation */}
            <div className="col-xs-4 ">
                <Navigation />
            </div>
        </div>
    )
}

