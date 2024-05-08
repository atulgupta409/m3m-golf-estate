import React from "react";
import uhaLondonLogo from "../assets/uha-london-logo.png";
import interior from "../assets/hba-singapore-logo.png";
import construtor from "../assets/larsen-turbo.png";
import equipment from "../assets/miele-kitchens.png";

const Partners = () => {
  return (
    <div className="some_facts">
      <div className="overlay">
        <div className="container">
          <div className="facts_wrapper text-center row">
            <div className="col-md-3 col-sm-6">
              <div className="text">
                <h3>Architectural Partner</h3>
                <img
                  src={uhaLondonLogo}
                  alt="uha london"
                  className="img-fluid center-block"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text">
                <h3>Interior Designing</h3>
                <img
                  src={interior}
                  alt="uha london"
                  className="img-fluid center-block"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text">
                <h3>Construction Partner</h3>
                <img
                  src={construtor}
                  alt="uha london"
                  className="img-fluid center-block"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text">
                <h3>Equipment Partner</h3>
                <img
                  src={equipment}
                  alt="uha london"
                  className="img-fluid center-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
