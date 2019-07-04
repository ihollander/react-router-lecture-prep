import React from "react";
import SearchBar from "../components/SearchBar";

class HomePage extends React.Component {
  state = {
    filterValue: ""
  };

  setFilter = newFilterValue => {
    this.setState({
      filterValue: newFilterValue
    });
  };

  applyFilter = () => {
    return this.props.customers.filter(customer => {
      return customer.name
        .toLowerCase()
        .includes(this.state.filterValue.toLowerCase());
    });
  };

  render() {
    return (
      <div className="home-page">
        <SearchBar setCurrentPage={this.props.setCurrentPage} />
      </div>
    );
  }
}

export default HomePage;
