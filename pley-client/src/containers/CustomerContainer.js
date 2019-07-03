import React from 'react'
import CustomerCard from '../components/CustomerCard'

class CustomerContainer extends React.Component {
  render(){

    return (
      <div className="customer-container">
        <h3>{this.props.category}</h3>
        <div className="card-container">
          { 
            this.props.customers.map(customer => {
              return <CustomerCard key={customer.id} {...customer} selectCustomer={this.props.selectCustomer} />
            })
          }
        </div>
      </div>
    )
  }
}

export default CustomerContainer