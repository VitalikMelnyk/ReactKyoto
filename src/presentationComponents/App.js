import React, { Component, Fragment } from "react";
// import '../../node_modules/slick-carousel/slick/slick.scss';
// import '../../node_modules/slick-carousel/slick/slick-theme.scss';
import { Switch, Route } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import SushiPage from "../components/SushiPage/SushiPage";


import "./App.scss";
import '../components/MediaQueries/mediaQueries.scss';
import '../components/SushiPage/MediaQueriesSushi/MediaQueriesSushi.scss';
import UberUns from "../components/UberUns/UberUns";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/">
            <section className="section-introduction">
              {/* Header */}
              <div className="container-fluid">
                <Header />
              </div>
              <Home />
            </section>
          </Route>
          <Route path="/sushi">
            <section className="section-sushi-page">
              {/* Header */}
              <div className="container-fluid">
                <Header />
              </div>
              <SushiPage />
            </section>
          </Route>
          <Route path="/uber-uns">
            <section className="section-uberUns">
              {/* Header */}
              <div className="container-fluid">
                <Header />
              </div>
              <UberUns />
            </section>
          </Route>
          <Route path="/contacts">
            <section className="section-contacts">
              {/* Header */}
              <div className="container-fluid">
                <Header />
              </div>
              {/* <SushiPage /> */}
            </section>
          </Route>
        </Switch>

      </Fragment>
    );
  }
}
