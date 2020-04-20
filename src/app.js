import React from "react";

import Nav from "./components/Nav";
import Content from "./components/Content";
import Background from "./components/Background";
import GlobalStyles from "./styles";

import { StateProvider } from "./store";

export default () => (
  <>
    <GlobalStyles />
    {/* <Background /> */}
    <StateProvider>
      <Nav />
      <Content />
    </StateProvider>
  </>
);
