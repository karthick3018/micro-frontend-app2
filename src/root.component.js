import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ListItems from "./list";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/list" component={ListItems} />
    </BrowserRouter>
  );
}
