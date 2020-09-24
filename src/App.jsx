import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/css/App.css";
import { Container } from "./layouts";
import { Navbar, Content } from "./views";
import DataState from "./context/State";
import 'moment/locale/id';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataState>
        <Container>
          <Navbar theme={theme} />
          <Content theme={theme} />
        </Container>
      </DataState>
    </ThemeProvider >
  );
}

export default App;
