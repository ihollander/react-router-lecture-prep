import React, { Component } from "react";
import "../App.css";
import HomePage from "./HomePage";
import AllCustomersPage from "./AllCustomersPage";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";

// hacky approach to get url info, demo purposes only!
const getRouteInfo = routeString => {
  const [path, queryString] = routeString.split("?");
  const [route, ...params] = path.split("/");

  let queryParams = null;
  if (queryString) {
    queryParams = queryString.split("&").reduce((obj, cur) => {
      const [key, value] = cur.split("=");
      obj[key] = value;
      return obj;
    }, {});
  }
  return {
    route,
    params,
    queryParams
  };
};

class App extends Component {
  state = {
    route: "home"
  };

  setCurrentPage = route => this.setState({ route });

  renderPage() {
    const routeInfo = getRouteInfo(this.state.route);
    console.log("routeInfo:", routeInfo);
    switch (routeInfo.route) {
      case "home":
        return <HomePage setCurrentPage={this.setCurrentPage} />;
      case "customers":
        return (
          <AllCustomersPage
            routeInfo={routeInfo}
            setCurrentPage={this.setCurrentPage}
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
        <Navbar setCurrentPage={this.setCurrentPage} />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
