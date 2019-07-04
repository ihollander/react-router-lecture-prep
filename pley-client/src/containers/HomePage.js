import React from "react";
import SearchBar from "../components/SearchBar";

class HomePage extends React.Component {
  setSearchTerm = searchTerm => {
    this.props.history.push(`/customers?searchTerm=${searchTerm}`);
  };

  render() {
    console.log("HomePage props:", this.props);
    return (
      <div className="home-page">
        <SearchBar setSearchTerm={this.setSearchTerm} />
      </div>
    );
  }
}

export default HomePage;
