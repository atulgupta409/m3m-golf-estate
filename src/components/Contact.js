import React from "react";
import contactImg from "../assets/m3m-golf-estate-main-contact.jpg";

const Contact = () => {
  return (
    <div className="container main_container">
      <div className="text-center">
        <h2 className="main_title d-inline-block">
          Buy apartment at <span>m3m golf estate</span>
        </h2>
      </div>
      <div className="row contact_agent_wrapper">
        <div className="col-md-6">
          <img src={contactImg} alt="contact" className="img-fluid" />
        </div>
        <div className="col-md-6 agent_info_wrapper">
          <div className="m3m_contact">
            <div className="name">
              <h4>Sumit Anand</h4>
              <i>Real Estate Expert</i>
            </div>
            <div className="info">
              <span className="ficon flaticon-phone"></span>
              <h6>Call Now</h6>
              <p>
                <a href="tel:9999063322">9999063322</a>
              </p>
            </div>
          </div>
          <form className="agent_contact_form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Name*"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email*"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="mob"
                placeholder="Mobile*"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <select className="form-control" required>
                <option value="" disabled selected>
                  Please Select Property Type
                </option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Other/Any">Other/Any</option>
              </select>
            </div>
            <button className="btn text-white font-weight-bold thm-button btn-block">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
