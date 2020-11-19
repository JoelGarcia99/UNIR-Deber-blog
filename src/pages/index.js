import React from "react";
import HomeScreen from "./home";

import "../css/general.css";

export default function Home({location}) {
  return <HomeScreen location={location}/>;
}
