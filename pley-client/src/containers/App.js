import React, { Component } from "react";
import "../App.css";
import HomePage from "./HomePage";
import AllCustomersPage from "./AllCustomersPage";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";

class App extends Component {
  state = {
    page: "home",
    customers: [],
    search: "",
    currentCustomerId: null,
    loading: true
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/customers")
      .then(res => res.json())
      .then(data => {
        this.setState({
          customers: data,
          loading: false
        });
      });
  }

  addReview = review => {
    const updatedCustomers = this.state.customers.map(customer => {
      if (customer.id === review.customer_id) {
        return {
          ...customer,
          reviews: [...customer.reviews, review]
        };
      } else {
        return customer;
      }
    });

    this.setState({ customers: updatedCustomers });
  };

  setCurrentPage = page =>
    this.setState({ page, search: "", currentCustomerId: null });

  setCurrentCustomer = currentCustomerId =>
    this.setState({ currentCustomerId, page: "customers" });

  setSearchTerm = search => this.setState({ search, page: "customers" });

  renderPage() {
    console.log("page:", this.state.page);
    switch (this.state.page) {
      case "home":
        return <HomePage setSearchTerm={this.setSearchTerm} />;
      case "customers":
        return (
          <AllCustomersPage
            customers={this.state.customers}
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
        <Navbar setCurrentPage={this.setCurrentPage} />
        {this.state.loading ? (
          <img
            alt="loading..."
            className="loader"
            src="https://www.macupdate.com/images/icons256/54019.png"
          />
        ) : (
          this.renderPage()
        )}
      </div>
    );
  }
}

export default App;
