import React from "react";
import StarRating from "./StarRating";
import { withRouter } from "react-router-dom";

function CustomerCard({
  setCurrentCustomer,
  id,
  avatar_url,
  name,
  average_rating,
  average_tip_rating,
  history
}) {
  return (
    <div
      onClick={() => history.push(`/customers/${id}`)}
      className="customer-card"
    >
      <div className="card-image">
        <img src={avatar_url} alt={name} />
      </div>
      <div className="card-details">
        <h3>{name}</h3>
        <strong>Rating: </strong>
        <StarRating rating={average_rating} />
        <br />
        <strong>Tip Rating: </strong>
        <StarRating rating={average_tip_rating} symbol="$" color="green" />
      </div>
    </div>
  );
}

export default withRouter(CustomerCard);
