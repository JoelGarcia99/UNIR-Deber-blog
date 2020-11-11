import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import "../css/general.css";
import CreateEntry from "./Create";
import ItemScreen from "./Entry";
import { HomeScreen } from "./home";

export default function Home() {
  return (
      <BrowserRouter>
        <Switch>
          <Route key="create" exact path="/create" component={CreateEntry} />
          <Route key="entry" exact path="/entry" component={ItemScreen} />
          <Route key="home" exact path="/" component={HomeScreen} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
  );  
}
