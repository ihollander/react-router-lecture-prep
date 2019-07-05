import React, { Component } from "react";
import "../App.css";
import HomePage from "./HomePage";
import AllCustomersPage from "./AllCustomersPage";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";
import ProtectedRoute from "../components/ProtectedRoute";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    page: "home",
    search: "",
    currentCustomerId: null,
    isSignedIn: true
  };

  setCurrentPage = page =>
    this.setState({ page, search: "", currentCustomerId: null });

  setCurrentCustomer = currentCustomerId =>
    this.setState({ currentCustomerId, page: "customers" });

  setSearchTerm = search => this.setState({ search, page: "customers" });

  handleSignIn = () => this.setState({ isSignedIn: true });
  handleSignOut = () => this.setState({ isSignedIn: false });

  // renderPage() {
  //   console.log("App state", this.state);
  //   switch (this.state.page) {
  //     case "home":
  //       return <HomePage setSearchTerm={this.setSearchTerm} />;
  //     case "customers":
  //       return (
  //         <AllCustomersPage
  //           customers={this.state.customers}
  //           search={this.state.search}
  //           currentCustomerId={this.state.currentCustomerId}
  //           setCurrentCustomer={this.setCurrentCustomer}
  //           addReview={this.addReview}
  //         />
  //       );
  //     case "profile":
  //       return <ProfilePage />;
  //     default:
  //       return <div>Loading...</div>;
  //   }
  // }

  render() {
    return (
      <div className="app">
        <Navbar
          setCurrentPage={this.setCurrentPage}
          isSignedIn={this.state.isSignedIn}
          handleSignIn={this.handleSignIn}
          handleSignOut={this.handleSignOut}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/customers"
            render={routeProps => (
              <AllCustomersPage
                {...routeProps}
                search={this.state.search}
                currentCustomerId={this.state.currentCustomerId}
                setCurrentCustomer={this.setCurrentCustomer}
              />
            )}
          />
          <ProtectedRoute
            path="/profile"
            isSignedIn={this.state.isSignedIn}
            component={ProfilePage}
          />
          <Route render={() => <h1>Page Not Found 404</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
