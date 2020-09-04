// src/pages/Contact.js
import React from 'react';
import Spacer from "../app/images/spacer.png";
import GoogleMaps from "../components/GoogleMaps";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import Back2School3 from "../app/images/schoolshoppinglist3.jpg";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <h1 className="is-size-3 has-text-weight-bold has-text-success-dark has-text-centered">Contact Us</h1>
        <p className="title has-text-link is-italic is-size-5">
          <span className="icon has-text-link is-medium"> <i className="far fa-comment-dots fa-2x"></i></span>
          <img src={Spacer} alt="" />
          Let's chat! How can my web development & IT skills help you? Drop me a note below please.
        </p>
        <img src={Back2School3} className="img_responsive" alt="Back to School Shopping List" title="Back to School Shopping List" />

        <p>Heave to capstan Plate Fleet aft fathom scallywag gibbet. To go on account boom topsail league brig bilge schooner. Shrouds bring a spring upon her cable overhaul doubloon crow's nest heave down crimp mizzenmast. Gabion jib Privateer lass jolly boat crack Jennys tea cup flogging wherry. Gally chandler log salmagundi scuppers take a caulk belay American Main. Gally prow landlubber or just lubber chase guns walk the plank starboard black spot pink.
        </p>
        <h1 className="is-size-3 has-text-weight-bold has-text-link-dark has-text-centered">Contact Details</h1>
        <br />

        <div className="columns">
          <div className="column is-one-third has-text-justified"> 
            <ContactDetails />
          </div>
          <div className="column">
            <ContactForm />
          </div>
        </div>
      </div>
      <GoogleMaps/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  )
}

export default Contact
