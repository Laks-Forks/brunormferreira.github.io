import React, { createContext } from "react";

import Nav from "./components/Nav";
import Content from "./components/Content";

import GlobalStyles from "./styles";

const newContext = React.createContext({ color: "black" });

export default () => (
  <>
    <GlobalStyles />
    <Nav />
    <Content />
  </>
);
