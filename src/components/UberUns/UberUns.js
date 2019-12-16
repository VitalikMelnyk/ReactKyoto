import React, { Component } from "react";
// import Slider from "react-slick";
import Carousel from 'react-bootstrap/Carousel';
import './UberUns.scss';

const imgAndy = require('../../assets/uberUns/andy.png');

export default class UberUns extends Component {

    
    render() {

        const settings = {
            fade: true
        }

        return (
            <div className="container-fluid uberUns-container">
                <div className="col-12 col-lg-5  uberUns-description">
                    <div className="uberUns-title">Über uns</div>
                    <div className="uberUns-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
            </div>
                </div>
                <div className="col text-center uberUns-slider">

                    <Carousel {...settings}>
                        <Carousel.Item>
                            <img
                                className="slider-item-img"
                                src={imgAndy}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slider-item-img"
                                src={imgAndy}
                                alt="Third slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slider-item-img "
                                src={imgAndy}
                                alt="Third slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slider-item-img "
                                src={imgAndy}
                                alt="Third slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="slider-item-img "
                                src={imgAndy}
                                alt="Third slide"
                            />


                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
        );
    }
}
