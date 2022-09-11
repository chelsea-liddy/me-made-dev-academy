import React from 'react'

const Stash = () => {
  return (
    <div>
      <h1 className="page-header">Stash</h1>
      <div className="flex-grid">
        <div className="col">
          <h2>Stash item 1</h2>
          <img
            src="https://cdn.shopify.com/s/files/1/0275/2849/5179/products/Heavy-Gingham-Olive-web.jpg?v=1646010914"
            alt="green and white checked fabric"
          ></img>
          <h3>Description</h3>
          <p>100% linen</p>
          <h3>Quantity</h3>
          <p>3m</p>
        </div>
      </div>
    </div>
  )
}

export default Stash
