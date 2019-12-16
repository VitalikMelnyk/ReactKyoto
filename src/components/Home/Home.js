import React from 'react';
import { Link } from "react-router-dom";
import './Home.scss';
export const Home = () => {
    return (
        <div className="container-fluid introduction-inner">
            <div className="row text-center d-flex flex-column ">
                <div className="col-12 d-flex flex-column">
                    <div className="introduction-description">
                        <h1 className="introduction-title">Lorem ipsum dolor sit</h1>
                        <h3 className="introduction-subtitle">
                            Lorem ipsum dolor sit amet
                  </h3>

                        {/* <a href="sushi.html" className="introduction-btn">
                            jetzt reservieren
                  </a> */}
                        <Link to="/sushi" className="introduction-btn">jetzt reservieren</Link>
                    </div>
                </div>
                {/* <!-- <div className="col text-right introduction-footer">
                <p className="introduction-footer-text">
                  Impressum / Datenschutz
                    </p>
              </div>
              --> */}
            </div>
        </div>
    )
}
