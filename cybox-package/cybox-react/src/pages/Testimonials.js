import React from "react";
import PageTitle from "../components/pagetitle";
import Testimonialslidder from '../assets/fake-data/testimonialspagedata';
import Project from '../features/project/testimonialdata/testimonial'
// import Project from '../features/project/testimonialdata';


const Testimonials = () => {
  return (
    <div>

      <PageTitle title="" />
      <div className="s-container">
        <div className="left-service">
          <h3>Testimonials</h3>
          <p>E-CORP saved money and time for these prestigious entrepreneurs.</p>
          <button className="m-button">
            Home {">"}
            {">"} Testimonials
          </button>
        </div>
        <div className="right-service">
          <img
            className="triangle-image"
            src="https://ecorpwpsrv-0f9814189c3cdd15bdb8-endpoint.azureedge.net/blobecorpwpsrv0c6c233083/wp-content/uploads/2023/03/pngwing.com-1.png"
            alt=""
          />
        </div>
      </div>
      
      <Project data={Testimonialslidder} />
    </div>

  );
};

export default Testimonials;
