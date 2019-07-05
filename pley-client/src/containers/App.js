import React, { Component } from "react";
import "../App.css";
import HomePage from "./HomePage";
import AllCustomersPage from "./AllCustomersPage";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";

class App extends Component {
  state = {
    page: "home",
    search: "",
    currentCustomerId: null,
    isSignedIn: true
  };

  setCurrentPage = page => {
    this.setState({
      page,
      search: "",
      currentCustomerId: null
    });
  };

  setCurrentCustomer = currentCustomerId => {
    this.setState({
      currentCustomerId,
      page: "customers"
    });
  };

  setSearchTerm = search => {
    this.setState({
      search,
      page: "customers"
    });
  };

  setSignIn = isSignedIn => this.setState({ isSignedIn });

  renderPage() {
    console.log("Current page:", this.state.page);
    switch (this.state.page) {
      case "home":
        return <HomePage setSearchTerm={this.setSearchTerm} />;
      case "customers":
        return (
          <AllCustomersPage
            search={this.state.search}
            currentCustomerId={this.state.currentCustomerId}
            setCurrentCustomer={this.setCurrentCustomer}
            addReview={this.addReview}
          />
        );
      case "profile":
        return <ProfilePage />;
      default:
        return <div>Loading...</div>;
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar
          setCurrentPage={this.setCurrentPage}
          isSignedIn={this.state.isSignedIn}
          setSignIn={this.setSignIn}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
