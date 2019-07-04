import React from "react";
import UserDetails from "../components/UserDetails";
import ReviewContainer from "./ReviewContainer";
import ReviewForm from "../components/ReviewForm";

class CustomerPage extends React.Component {
  getSelectedCustomer() {
    console.log(this.props);
    return this.props.customers.find(
      customer => customer.id === parseInt(this.props.match.params.id)
    );
  }

  render() {
    const customer = this.getSelectedCustomer();
    if (customer) {
      return (
        <div className="customer-page">
          <UserDetails {...this.getSelectedCustomer()} />
          <ReviewContainer
            reviews={this.getSelectedCustomer().reviews}
            customerName={this.getSelectedCustomer().name}
          />
          <ReviewForm
            addReview={this.props.addReview}
            customerID={this.getSelectedCustomer().id}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CustomerPage;
