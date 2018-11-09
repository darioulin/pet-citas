import React, { Component } from "react";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header titulo={"Administrador de Pacientes de Veterinaria"} />
      </div>
    );
  }
}

export default App;
