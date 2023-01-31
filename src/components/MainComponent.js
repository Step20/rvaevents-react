import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./HomeComponent";
import { About } from "./AboutComponent";
import { PageNav } from "./NavComponent";

export default function Main() {
  return (
    <div>
      <PageNav />
      <Home />
      <About />
    </div>
  );
}
