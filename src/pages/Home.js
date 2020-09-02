// src/pages/Home.js
import React from 'react';
import ShoppingImage2 from '../app/images/schoolshoppinglist2.jpg'

const Home = () => {
  return (
    <section className="section">
      <div className="content">
        <div className="u-text-left">
          <h1 className="pageHeader u-text-center">Home</h1>
          <img src={ShoppingImage2} className="img_responsive" alt="Back2School Shopping List" title="Back2School Shopping List" />

          <p>Aft yard American Main parley lad barque hearties. Parley pressgang run a shot across the bow pinnace trysail gangway main sheet. Crimp parley parrel black jack crack Jennys tea cup knave rutters.</p>
          <p>Wench heave down fire ship bilge rat belaying pin Sink me yardarm. Stern Jack Tar landlubber or just lubber squiffy Chain Shot gangway pressgang. Fire in the hole marooned aye draft parley measured fer yer chains Gold Road.</p>
        </div>
      </div>
    </section>
  )
}

export default Home