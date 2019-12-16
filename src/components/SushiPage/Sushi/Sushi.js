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

export const Sushi = () => {
    return (
        <div className="row text-center no-gutters section-sushi-inner">
            <div className="col-4 col-sm">
                <a href className="sushi-set-item">

                    <img className="sushi-set-img " src={sushiImages.sashimi} alt="sashimi" />

                    <div className="sushi-set-text">Sashimi</div>
                </a>
            </div>
            <div className="col-4 col-sm">
                <a href className="sushi-set-item">

                    <img className="sushi-set-img " src={sushiImages.nigiri} alt="nigiri" />

                    <div className="sushi-set-text">Nigiri</div>
                </a>
            </div>
            <div className="col-4 col-sm">
                <a href className="sushi-set-item">

                    <img className="sushi-set-img " src={sushiImages.gunkan} alt="gunkan" />

                    <div className="sushi-set-text">Gunkan</div>
                </a>
            </div>
            <div className="col-4 col-sm">
                <a href className="sushi-set-item">

                    <img className="sushi-set-img " src={sushiImages.norimaki} alt="norimaki" />

                    <div className="sushi-set-text">Nori Maki</div>
                </a>
            </div>
            <div className="col-4 col-sm">
                <a href className="sushi-set-item">

                    <img className="sushi-set-img " src={sushiImages.dragonroll} alt="dragonroll" />

                    <div className="sushi-set-text">Dragon Roll</div>
                </a>
            </div>
            <div className="col-4 col-sm">
                <a href className="sushi-set-item --someWordsItem">

                    <img className="sushi-set-img " src={sushiImages.katsuroll} alt="katsuroll" />

                    <div className="sushi-set-text">Frittierte Katsuroll</div>
                </a>
            </div>

            <div className="col-4 col-sm">
                <a href className="sushi-set-item last-sushi-set-item">

                    <img className="sushi-set-img last-sushi-img" src={sushiImages.don} alt="don" />

                    <div className="sushi-set-text">Don</div>
                </a>
            </div>


        </div>
    )
}
