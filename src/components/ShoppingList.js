// src/components/ShoppingList.js
import React from 'react';
import ShoppingImage from '../app/images/schoolshoppinglist1.jpg'

const ShoppingList = () => {
  return (
    <section className="section">
      <div className="content">
        <div className="u-text-left">
          <h1 className="pageHeader u-text-center">Shopping List</h1>
          <img src={ShoppingImage} className="img_responsive" alt="Back2School Shopping List" title="Back2School Shopping List" />
          <p>Shopping List ~ Aft yard American Main parley lad barque hearties fer yer chains Gold Road.</p>
        </div>
      </div>
    </section>
  )
}

export default ShoppingList
