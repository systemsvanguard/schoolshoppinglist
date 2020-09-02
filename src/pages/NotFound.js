// src/pages/NotFound.js
import React from 'react';
import NotFoundImg from '../app/images/not_found.jpg'

const NotFound = () => {
  return (
    <section className="section">
      <div className="content">
        <div className="u-text-left">
          <h1 className="pageHeader u-text-center">Oops! Page Not Found</h1>
          <img src={NotFoundImg} className="img_responsive" alt="Image Not Found" title="Image Not Found" />

          <p className="subtitle has-text-centered">We are very sorry! We cannot find the resource you are looking for.  Please try again?</p>
        </div>
      </div>
    </section>
  )
}

export default NotFound