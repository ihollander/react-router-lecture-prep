import React from "react";
import CustomerContainer from "./CustomerContainer";
import CustomerPage from "./CustomerPage";

class AllCustomersPage extends React.Component {
  state = {
    customers: [],
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

  getSearchedCustomers() {
    if (this.props.search !== "") {
      return this.state.customers.filter(customer => {
        return customer.name
          .toLowerCase()
          .includes(this.props.search.toLowerCase());
      });
    } else {
      return this.state.customers;
    }
  }

  getSelectedCustomer() {
    return this.state.customers.find(
      customer => customer.id === this.props.currentCustomerId
    );
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
    }

    if (this.props.currentCustomerId) {
      return (
        <CustomerPage
          customer={this.getSelectedCustomer()}
          addReview={this.addReview}
        />
      );
    } else {
      return (
        <div className="home-page">
          <CustomerContainer
            customers={this.getSearchedCustomers()}
            setCurrentCustomer={this.props.setCurrentCustomer}
            customerId={this.props.customerId}
            category="All Customers"
          />
        </div>
      );
    }
  }
}

export default AllCustomersPage;
