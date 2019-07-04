import React from "react";
import CustomerContainer from "./CustomerContainer";

const AllCustomersPage = props => {
  return (
    <div className="home-page">
      <CustomerContainer
        selectCustomer={props.selectCustomer}
        category="All Customers"
        customers={props.customers}
      />
    </div>
  );
};

export default AllCustomersPage;
