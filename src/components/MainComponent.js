import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./HomeComponent";
import { About } from "./AboutComponent";
import { PageNav } from "./NavComponent";
import { Events } from "./EventsComponent";
import { Bar } from "./BarComponent";
import { Map } from "./MapComponent";
import { Footer } from "./FooterComponent";
import Explore from "./ExploreComponent";
import { EVENTS_LIST } from "../shared/EventCards";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventsList: EVENTS_LIST,
    };
  }
  render() {
    return (
      <div>
        <PageNav />
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route
              exact
              path="/explore"
              element={<Explore eventsList={this.state.eventsList} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
