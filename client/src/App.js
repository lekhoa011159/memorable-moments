import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Details from "./components/Details";

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </Container>
    );
  }
}

export default App;
