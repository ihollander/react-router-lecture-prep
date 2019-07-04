import React from "react";
import CustomerContainer from "./CustomerContainer";
import CustomerPage from "./CustomerPage";

class AllCustomersPage extends React.Component {
  getSearchedCustomers() {
    if (this.props.search !== "") {
      return this.props.customers.filter(customer => {
        return customer.name
          .toLowerCase()
          .includes(this.props.search.toLowerCase());
      });
    } else {
      return this.props.customers;
    }
  }

  getSelectedCustomer() {
    return this.props.customers.find(
      customer => customer.id === this.props.currentCustomerId
    );
  }

  render() {
    if (this.props.currentCustomerId) {
      return (
        <CustomerPage
          customer={this.getSelectedCustomer()}
          addReview={this.props.addReview}
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
