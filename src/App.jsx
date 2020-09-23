import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, Divider } from "./assets/css/App.css";
import { Container } from "./layouts";
import { Navbar } from "./views";
import DataState from "./context/State";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataState>
        <Container>
          <Navbar theme={theme} />
          <Divider />
        </Container>
      </DataState>
    </ThemeProvider>
  );
}

export default App;
