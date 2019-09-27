import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ResponsiveDrawer from "./ResponsiveDrawer";

const MainContainer = children => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
      <ResponsiveDrawer />
    </Container>
  </React.Fragment>
);

export default MainContainer;
