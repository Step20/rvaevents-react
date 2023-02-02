import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./HomeComponent";
import { About } from "./AboutComponent";
import { PageNav } from "./NavComponent";
import { Events } from "./EventsComponent";
import { Bar } from "./BarComponent";
import { Map } from "./MapComponent";
import { Footer } from "./FooterComponent";

export default function Main() {
  return (
    <div>
      <PageNav />
      <Home />
      <About />
      <Events />
      <Bar />
      <Map />
      <Footer />
    </div>
  );
}
