import React from 'react';

const sushiImages = {
    sashimi: require('../../../assets/Sushi/sashimi.png'),
    nigiri: require('../../../assets/Sushi/nigiri.png'),
    gunkan: require('../../../assets/Sushi/gunkan.png'),
    norimaki: require('../../../assets/Sushi/norimaki.png'),
    dragonroll: require('../../../assets/Sushi/dragonroll.png'),
    katsuroll: require('../../../assets/Sushi/katsuroll.png'),
    don: require('../../../assets/Sushi/don.png')
}

const stickImage = require('../../../assets/Sushi/sticks.png');


export const SushiDescriptionDesk = () => {
    return (
        <div className="container container-description-desk">
            <div className="row mx-auto slick-item ">
                <div className="col sushi-card">
                    <div className="row m-auto align-items-center">
                        <div className="col-12 col-md-3 pr-0 text-center">
                            <img src={sushiImages.sashimi} alt="sashimiBg" className="sushi-card-img" />
                        </div>
                        <div className="col-12  col-md-3 px-0 text-left">
                            <img src={stickImage} className="sushi-card-img" alt="sticks" />
                        </div>
                        <div className="col-12 col-md-5  sushi-card-description">
                            <h2 className="sushi-card-description-title">Sashimi</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>
                    </div>
                </div>
                <div className="col sushi-card">
                    <div className="row m-auto align-items-center">
                        <div className="col-12 col-md-3 pr-0 text-center">
                            <img src={sushiImages.nigiri} alt="nigiri" className="sushi-card-img" />
                        </div>
                        <div className="col-12  col-md-3 px-0 text-left">
                            <img src={stickImage} className="sushi-card-img" alt="sticks" />
                        </div>
                        <div className="col-12 col-md-5  sushi-card-description">
                            <h2 className="sushi-card-description-title">Nigiri</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>

                    </div>
                </div>
                <div className="col sushi-card">
                    <div className="row m-auto align-items-center">
                        <div className="col-12 col-md-3 pr-0 text-center">
                            <img src={sushiImages.gunkan} alt="Gunkan" className="sushi-card-img" />
                        </div>
                        <div className="col-12  col-md-3 px-0 text-left">
                            <img src={stickImage} className="sushi-card-img" alt="sticks" />
                        </div>
                        <div className="col-12 col-md-5  sushi-card-description">
                            <h2 className="sushi-card-description-title">Gunkan</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>

                    </div>
                </div>
                <div className="col sushi-card">
                    <div className="row m-auto align-items-center">
                        <div className="col-12 col-md-3 pr-0 text-center">
                            <img src={sushiImages.norimaki} alt="norimaki" className="sushi-card-img" />
                        </div>
                        <div className="col-12  col-md-3 px-0 text-left">
                            <img src={stickImage} className="sushi-card-img" alt="sticks" />
                        </div>
                        <div className="col-12 col-md-5  sushi-card-description">
                            <h2 className="sushi-card-description-title">Nori Maki</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>

                    </div>
                </div>
                <div className="col sushi-card">
                    <div className="row m-auto align-items-center">
                        <div className="col-12 col-md-3 pr-0 text-center">
                            <img src={sushiImages.dragonroll} alt="dragonroll" className="sushi-card-img" />
                        </div>
                        <div className="col-12  col-md-3 px-0 text-left">
                            <img src={stickImage} className="sushi-card-img" alt="sticks" />
                        </div>
                        <div className="col-12 col-md-5  sushi-card-description">
                            <h2 className="sushi-card-description-title">DragonRoll</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>

                    </div>
                </div>
                <div className="col sushi-card">
                    <div className="row m-auto align-items-center">
                        <div className="col-12 col-md-3 pr-0 text-center">
                            <img src={sushiImages.katsuroll} alt="katsuroll" className="sushi-card-img" />
                        </div>
                        <div className="col-12  col-md-3 px-0 text-left">
                            <img src={stickImage} className="sushi-card-img" alt="sticks" />
                        </div>
                        <div className="col-12 col-md-5  sushi-card-description">
                            <h2 className="sushi-card-description-title">Frittierte Katsuroll</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>

                    </div>
                </div>
                <div className="col sushi-card">
                    <div className="row m-auto align-items-center">
                        <div className="col-12 col-md-3 pr-0 text-center">
                            <img src={sushiImages.don} alt="don" className="sushi-card-img" />
                        </div>
                        <div className="col-12  col-md-3 px-0 text-left">
                            <img src={stickImage} className="sushi-card-img" alt="sticks" />
                        </div>
                        <div className="col-12 col-md-5  sushi-card-description">
                            <h2 className="sushi-card-description-title">Don</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
