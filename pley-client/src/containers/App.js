import React, { Component } from "react";
import "../App.css";
import HomePage from "./HomePage";
import AllCustomersPage from "./AllCustomersPage";
import CustomerPage from "./CustomerPage";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";

class App extends Component {
  state = {
    customers: [],
    currentCustomer: null,
    loading: true,
    page: "home"
  };

  addReview = review => {
    const updatedCustomers = this.state.customers.map(customer => {
      if (customer.id === review.customer_id) {
        return { ...customer, reviews: [...customer.reviews, review] };
      } else {
        return customer;
      }
    });

    this.setState({ customers: updatedCustomers });
  };

  selectCustomer = customerID => {
    const foundCustomer = this.state.customers.find(
      customer => customer.id === customerID
    );

    this.setState({
      currentCustomer: foundCustomer,
      page: "customer"
    });
  };

  fetchCustomers = () => {
    fetch("http://localhost:3000/api/v1/customers")
      .then(res => res.json())
      .then(data => {
        this.setState({
          customers: data,
          loading: false
        });
      });
  };

  componentDidMount() {
    this.fetchCustomers();
  }

  getWorstCustomers() {
    const sortedCustomers = [...this.state.customers].sort(
      (customerA, customerB) =>
        customerA.average_rating - customerB.average_rating
    );
    const tenWorstCustomers = sortedCustomers.slice(0, 10);
    return tenWorstCustomers;
  }

  setCurrentPage = page => this.setState({ page });

  getCurrentPage() {
    switch (this.state.page) {
      case "home":
        return (
          <HomePage
            selectCustomer={this.selectCustomer}
            customers={this.getWorstCustomers()}
          />
        );
      case "customers":
        return (
          <AllCustomersPage
            selectCustomer={this.selectCustomer}
            customers={this.state.customers}
          />
        );
      case "customer":
        return (
          <CustomerPage
            addReview={this.addReview}
            customer={this.state.currentCustomer}
          />
        );
      case "profile":
        return <ProfilePage />;
      default:
        return <div>404</div>;
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <img
          alt="loading..."
          className="loader"
          src="https://www.macupdate.com/images/icons256/54019.png"
        />
      );
    } else {
      return (
        <div className="app">
          <Navbar setCurrentPage={this.setCurrentPage} />
          {this.getCurrentPage()}
        </div>
      );
    }
  }
}

export default App;
