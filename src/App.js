import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    n: false,
  };

  functionA = () => {
    this.setState({
      n: !this.state.n,
    });
  };

  functionB = () => {
    this.props.s(this.state);
    if (this.state.n) {
      alert("Opção: Ativo foi salvo!");
    } else {
      alert("Opção: Desativo foi salvo!");
    }
  };

  functionC = () => {
    if (this.state.n) {
      return "Ativo";
    } else {
      return "Desativo";
    }
  };

  functionD = () => {
    if (this.state.n) {
      return "Desativar notificação";
    } else {
      return "Ativar notificação";
    }
  };

  render() {
    return (
      <div className="teste">
        <h1>
          Deseja receber notificação de notícias em seu emamil sobre a série de desenho Rick
          and Morty?
        </h1>
        <p>
          Status: <b>{this.functionC()}</b>
        </p>
        <br />
        <button onClick={this.functionA}>{this.functionD()}</button>
        <br />
        <br />
        <br />
        <button onClick={this.functionB} className="sa">
          Salvar
        </button>
      </div>
    );
  }
}

const state = (state) => {
  return {
    n: state.n,
  };
};

const mdtp = (dispatch) => {
  return {
    s: (ss) => dispatch({ type: "SAVE_SETTINGS", ss }),
  };
};

export default connect(state, mdtp)(App);
