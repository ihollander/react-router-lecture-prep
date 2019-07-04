import React from "react";
import UserDetails from "../components/UserDetails";
import ReviewContainer from "./ReviewContainer";
import ReviewForm from "../components/ReviewForm";

class CustomerPage extends React.Component {
  render() {
    const customer = this.props.customers.find(
      customer => customer.id === parseInt(this.props.match.params.id)
    );
    if (!customer) {
      return <div>Loading...</div>;
    }

    return (
      <div className="customer-page">
        <UserDetails {...customer} />
        <ReviewContainer
          reviews={customer.reviews}
          customerName={customer.name}
        />
        <ReviewForm addReview={this.props.addReview} customerID={customer.id} />
      </div>
    );
  }
}

export default CustomerPage;
