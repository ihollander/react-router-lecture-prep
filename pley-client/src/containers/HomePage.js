import React from "react";
import SearchBar from "../components/SearchBar";

class HomePage extends React.Component {
  searchCustomers = search => {
    this.props.history.push(`/customers?search=${search}`);
  };
  render() {
    return (
      <div className="home-page">
        <SearchBar setSearchTerm={this.searchCustomers} />
      </div>
    );
  }
}

export default HomePage;
