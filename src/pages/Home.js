// src/pages/Home.js
import React from 'react';
import SchoolItem from "../components/SchoolItem.js";

const Home = () => {
  return (
    <div className="container">
      <h1 className="is-size-3 has-text-weight-bold has-text-success has-text-centered">React Shopping List</h1>
      <br />

      <div className="has-text-centered">
        <SchoolItem />
      </div>
	</div>
  )
}

export default Home
