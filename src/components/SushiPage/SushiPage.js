// import React, {useState, useEffect} from 'react';
// import Slider from "react-slick";
// import { Sushi } from './Sushi/Sushi';
// import { SushiDescriptionDesk } from './SushiDescriptionDesk/SushiDescriptionDesk';

// export const SushiPage = () => {
//     const [navSushiSet, setNavSushiSet] = useState(null);
//     const [navSushiDesk, setNavSushiDesk] = useState(null);

//     useEffect(() => {
//         setNavSushiSet();
//         setNavSushiDesk();
//     },[]);

//     return (
//         <div className="section-sushi">

//             <div className="container --sushi-desk">
//                 <Slider>

//                 <Sushi />
//                 </Slider>
//                 <Slider>
//                 <SushiDescriptionDesk />
//                 </Slider>
//             </div>
//         </div>
//     )
// }
import React, { Component } from "react";

import "./SushiPage.scss";
import Slider from "react-slick";

const sushiImages = {
  sashimi: require("../../assets/Sushi/sashimi.png"),
  nigiri: require("../../assets/Sushi/nigiri.png"),
  gunkan: require("../../assets/Sushi/gunkan.png"),
  norimaki: require("../../assets/Sushi/norimaki.png"),
  dragonroll: require("../../assets/Sushi/dragonroll.png"),
  katsuroll: require("../../assets/Sushi/katsuroll.png"),
  don: require("../../assets/Sushi/don.png")
};

const stickImage = require("../../assets/Sushi/sticks.png");

export default class SushiPage extends Component {
  state = {
    nav1: null,
    nav2: null
  };

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settingsSlider1 = {
      slidesToShow: 7,
      slidesToScroll: 1,
      // infinite: false,
      initialSlide: 0,
      easing: "ease",
      arrows: true,
      //   dots: true,

      focusOnSelect: true,

      // the magic
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            infinite: true
          }
          // settings: "unslick" // destroys slick
        }
      ]
    };

    const settingsSlider2 = {
      slidesToShow: 1,
      focusOnSelect: true,
      slidesToScroll: 1,
      easing: "ease",
      // arrows: true,
      dots: true,
      fade: true
    };

    return (
      <div className="section-sushi">
        <div className="container px-0 --sushi-desk">
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            {...settingsSlider1}
            className="row text-center no-gutters section-sushi-inner"
          >
            <div className="col-4 px-0 col-sm topitem">
              <a href className="sushi-set-item">
                <img
                  className="sushi-set-img "
                  src={sushiImages.sashimi}
                  alt="sashimi"
                />

                <div className="sushi-set-text">Sashimi</div>
              </a>
            </div>
            <div className="col-4 px-0 col-sm topitem">
              <a href className="sushi-set-item">
                <img
                  className="sushi-set-img "
                  src={sushiImages.nigiri}
                  alt="nigiri"
                />

                <div className="sushi-set-text">Nigiri</div>
              </a>
            </div>
            <div className="col-4 px-0 col-sm topitem">
              <a href className="sushi-set-item">
                <img
                  className="sushi-set-img "
                  src={sushiImages.gunkan}
                  alt="gunkan"
                />

                <div className="sushi-set-text">Gunkan</div>
              </a>
            </div>
            <div className="col-4 px-0 col-sm topitem">
              <a href className="sushi-set-item">
                <img
                  className="sushi-set-img "
                  src={sushiImages.norimaki}
                  alt="norimaki"
                />

                <div className="sushi-set-text">Nori Maki</div>
              </a>
            </div>
            <div className="col-4 px-0 col-sm topitem">
              <a href className="sushi-set-item">
                <img
                  className="sushi-set-img "
                  src={sushiImages.dragonroll}
                  alt="dragonroll"
                />

                <div className="sushi-set-text">Dragon Roll</div>
              </a>
            </div>
            <div className="col-4 px-0 col-sm topitem">
              <a href className="sushi-set-item --someWordsItem">
                <img
                  className="sushi-set-img "
                  src={sushiImages.katsuroll}
                  alt="katsuroll"
                />

                <div className="sushi-set-text">Frittierte Katsuroll</div>
              </a>
            </div>

            <div className="col-4 px-0 col-sm topitem">
              <a href className="sushi-set-item last-sushi-set-item">
                <img
                  className="sushi-set-img last-sushi-img"
                  src={sushiImages.don}
                  alt="don"
                />

                <div className="sushi-set-text">Don</div>
              </a>
            </div>
          </Slider>

          <div className="container container-description-desk">
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              {...settingsSlider2}
              className="row mx-auto slick-item"
            >
              <div className="col sushi-card">
                <div className="row m-auto align-items-center">
                  <div className="col-12 col-md-3 pr-0 text-center">
                    <img
                      src={sushiImages.sashimi}
                      alt="sashimiBg"
                      className="sushi-card-img"
                    />
                  </div>
                  <div className="col-12  col-md-3 px-0 text-left">
                    <img
                      src={stickImage}
                      className="sushi-card-img"
                      alt="sticks"
                    />
                  </div>
                  <div className="col-12 col-md-5  sushi-card-description">
                    <h2 className="sushi-card-description-title">Sashimi</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col sushi-card">
                <div className="row m-auto align-items-center">
                  <div className="col-12 col-md-3 pr-0 text-center">
                    <img
                      src={sushiImages.nigiri}
                      alt="nigiri"
                      className="sushi-card-img"
                    />
                  </div>
                  <div className="col-12  col-md-3 px-0 text-left">
                    <img
                      src={stickImage}
                      className="sushi-card-img"
                      alt="sticks"
                    />
                  </div>
                  <div className="col-12 col-md-5  sushi-card-description">
                    <h2 className="sushi-card-description-title">Nigiri</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col sushi-card">
                <div className="row m-auto align-items-center">
                  <div className="col-12 col-md-3 pr-0 text-center">
                    <img
                      src={sushiImages.gunkan}
                      alt="Gunkan"
                      className="sushi-card-img"
                    />
                  </div>
                  <div className="col-12  col-md-3 px-0 text-left">
                    <img
                      src={stickImage}
                      className="sushi-card-img"
                      alt="sticks"
                    />
                  </div>
                  <div className="col-12 col-md-5  sushi-card-description">
                    <h2 className="sushi-card-description-title">Gunkan</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col sushi-card">
                <div className="row m-auto align-items-center">
                  <div className="col-12 col-md-3 pr-0 text-center">
                    <img
                      src={sushiImages.norimaki}
                      alt="norimaki"
                      className="sushi-card-img"
                    />
                  </div>
                  <div className="col-12  col-md-3 px-0 text-left">
                    <img
                      src={stickImage}
                      className="sushi-card-img"
                      alt="sticks"
                    />
                  </div>
                  <div className="col-12 col-md-5  sushi-card-description">
                    <h2 className="sushi-card-description-title">Nori Maki</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col sushi-card">
                <div className="row m-auto align-items-center">
                  <div className="col-12 col-md-3 pr-0 text-center">
                    <img
                      src={sushiImages.dragonroll}
                      alt="dragonroll"
                      className="sushi-card-img"
                    />
                  </div>
                  <div className="col-12  col-md-3 px-0 text-left">
                    <img
                      src={stickImage}
                      className="sushi-card-img"
                      alt="sticks"
                    />
                  </div>
                  <div className="col-12 col-md-5  sushi-card-description">
                    <h2 className="sushi-card-description-title">DragonRoll</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col sushi-card">
                <div className="row m-auto align-items-center">
                  <div className="col-12 col-md-3 pr-0 text-center">
                    <img
                      src={sushiImages.katsuroll}
                      alt="katsuroll"
                      className="sushi-card-img"
                    />
                  </div>
                  <div className="col-12  col-md-3 px-0 text-left">
                    <img
                      src={stickImage}
                      className="sushi-card-img"
                      alt="sticks"
                    />
                  </div>
                  <div className="col-12 col-md-5  sushi-card-description">
                    <h2 className="sushi-card-description-title">
                      Frittierte Katsuroll
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col sushi-card">
                <div className="row m-auto align-items-center">
                  <div className="col-12 col-md-3 pr-0 text-center">
                    <img
                      src={sushiImages.don}
                      alt="don"
                      className="sushi-card-img"
                    />
                  </div>
                  <div className="col-12  col-md-3 px-0 text-left">
                    <img
                      src={stickImage}
                      className="sushi-card-img"
                      alt="sticks"
                    />
                  </div>
                  <div className="col-12 col-md-5  sushi-card-description">
                    <h2 className="sushi-card-description-title">Don</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
