import React from "react";
import CustomerContainer from "./CustomerContainer";
import CustomerPage from "./CustomerPage";
import queryString from "query-string";
import { Route, Switch } from "react-router-dom";

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
    const query = this.props.location.search;
    const queryValues = queryString.parse(query);
    if (queryValues.searchTerm) {
      return this.state.customers.filter(customer => {
        return customer.name
          .toLowerCase()
          .includes(queryValues.searchTerm.toLowerCase());
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
    console.log("CustomerPage props:", this.props);
    if (this.state.loading) {
      return (
        <img
          alt="loading..."
          className="loader"
          src="https://www.macupdate.com/images/icons256/54019.png"
        />
      );
    }

    return (
      <div className="home-page">
        <Switch>
          <Route
            path={`${this.props.match.url}/:id`}
            render={routeProps => (
              <CustomerPage
                {...routeProps}
                customers={this.state.customers}
                addReview={this.addReview}
              />
            )}
          />
          <Route
            path={this.props.match.url}
            render={() => (
              <CustomerContainer
                customers={this.getSearchedCustomers()}
                setCurrentCustomer={this.props.setCurrentCustomer}
                customerId={this.props.customerId}
                category="All Customers"
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default AllCustomersPage;
