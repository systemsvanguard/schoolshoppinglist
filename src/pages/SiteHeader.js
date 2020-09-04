// src/pages/SiteBanner.js
import React from 'react'

const SiteBanner = () => {
	const siteName = "Back2school"
	const siteMotto = "Stay organized in your Back2School shopping with our React.js List."

  return (
    <>
      <section className="hero is-success">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{siteName}</h1>
            <h2 className="subtitle"> {siteMotto}</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default SiteBanner
