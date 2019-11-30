import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";

class LoginContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Login />
        <Footer />
      </React.Fragment>
    );
  }
}

export default LoginContainer;
