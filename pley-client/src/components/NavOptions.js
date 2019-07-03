import React from 'react'

const NavOptions = (props) => {
  return (
    <div className="options">
      <button onClick={() => props.setCurrentPage("customers")}>All Customers</button>
      <button>Profile</button>
      <button>Sign out</button>
    </div>
  )
}

export default NavOptions