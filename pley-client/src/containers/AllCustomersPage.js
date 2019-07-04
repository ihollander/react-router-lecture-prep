import React from "react";
import CustomerContainer from "./CustomerContainer";
import CustomerPage from "./CustomerPage";
import queryString from "query-string";
import { Route, Switch } from "react-router-dom";

class AllCustomersPage extends React.Component {
  getSearchedCustomers() {
    const search = this.props.location.search;
    const queryValues = queryString.parse(search);

    if (queryValues.search) {
      return this.props.customers.filter(customer => {
        return customer.name
          .toLowerCase()
          .includes(queryValues.search.toLowerCase());
      });
    } else {
      return this.props.customers;
    }
  }

  render() {
    return (
      <Switch>
        <Route
          path="/customers/:id"
          render={routeProps => (
            <CustomerPage
              {...routeProps}
              customers={this.props.customers}
              addReview={this.props.addReview}
            />
          )}
        />
        <Route
          path="/customers"
          render={routeProps => (
            <div className="home-page">
              <CustomerContainer
                {...routeProps}
                customers={this.getSearchedCustomers()}
                setCurrentCustomer={this.props.setCurrentCustomer}
                customerId={this.props.customerId}
                category="All Customers"
              />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default AllCustomersPage;
