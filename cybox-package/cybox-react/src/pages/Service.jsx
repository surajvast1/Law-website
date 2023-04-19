import React from "react";
import PageTitle from "../components/pagetitle";

const Service = () => {
  return (
    <div>
      <PageTitle title="" />
      <div className="s-container">
        <div className="left-service">
          <h3>Our Services</h3>
          <p>We can file your gst with the help of our AI model.</p>
          <button className="s-button">
            Home {">"}
            {">"} Services
          </button>
        </div>
        <div className="right-service">
          <img
            className="triangle-image"
            src="https://ecorpwpsrv-0f9814189c3cdd15bdb8-endpoint.azureedge.net/blobecorpwpsrv0c6c233083/wp-content/uploads/2023/03/homeshape-bg.png"
            alt=""
          />
          <div className="image-container">
            <img
              className="hand-image"
              src="https://ecorpwpsrv-0f9814189c3cdd15bdb8-endpoint.azureedge.net/blobecorpwpsrv0c6c233083/wp-content/uploads/2023/03/CONTACT-US-HAND.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
