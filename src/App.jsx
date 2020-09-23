import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/css/App.css";
import { Container } from "./layouts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
