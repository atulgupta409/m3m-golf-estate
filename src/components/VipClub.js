import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiPoolTableCorner } from "react-icons/gi";
import { TbTheater } from "react-icons/tb";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { RiRestaurantLine } from "react-icons/ri";
import snooker from "../assets/m3m-snooker-room.jpg";
import theatre from "../assets/m3m-mini-theater.jpg";
import resort from "../assets/m3m-resort-pool.jpg";
import gym from "../assets/m3m-gym.jpg";
import restaurent from "../assets/m3m-restaurent.jpg";

const VipClub = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    <section className="property_details_tab property_details_tab2">
      <div className="overlay">
        <div className="container">
          <div className="text-center mb-3">
            <h3 className="main_title2 d-inline-block">
              VIP Club <span>M3M Golf Estate</span>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <div className="tab_nav_holder">
                <ul>
                  <li className={selectedButton === 1 && "active"}>
                    <Link onClick={() => handleButtonClick(1)}>
                      <div className="d-flex align-items-center">
                        <div className="vip_icon">
                          <GiPoolTableCorner className="f30" />
                        </div>
                        <div>
                          <h6>Snooker Room</h6>
                          <p>M3M Golf Estate</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={selectedButton === 2 && "active"}>
                    <Link onClick={() => handleButtonClick(2)}>
                      <div className="d-flex align-items-center">
                        <div className="vip_icon">
                          <TbTheater className="f30" />
                        </div>
                        <div>
                          <h6>Mini theater</h6>
                          <p>Enjoy at Club</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={selectedButton === 3 && "active"}>
                    <Link onClick={() => handleButtonClick(3)}>
                      <div className="d-flex align-items-center">
                        <div className="vip_icon">
                          <FaArrowUpFromWaterPump className="f30" />
                        </div>
                        <div>
                          <h6>Resort Pool</h6>
                          <p>Feel Fresh</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={selectedButton === 4 && "active"}>
                    <Link onClick={() => handleButtonClick(4)}>
                      <div className="d-flex align-items-center">
                        <div className="vip_icon">
                          <CgGym className="f30" />
                        </div>
                        <div>
                          <h6>World Class Gym</h6>
                          <p>Life at M3M Golfestate</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={selectedButton === 5 && "active"}>
                    <Link onClick={() => handleButtonClick(5)}>
                      <div className="d-flex align-items-center">
                        <div className="vip_icon">
                          <RiRestaurantLine className="f30" />
                        </div>
                        <div>
                          <h6>VIP Restaurent</h6>
                          <p>Food Court</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 col-lg-9 img_box">
              {selectedButton === 1 && (
                <img src={snooker} alt="snooker" id="snooker" />
              )}
              {selectedButton === 2 && (
                <img src={theatre} alt="mini theatre" id="theatre" />
              )}
              {selectedButton === 3 && (
                <img src={resort} alt="mini theatre" id="resort pool" />
              )}
              {selectedButton === 4 && (
                <img src={gym} alt="mini theatre" id="m3m gym" />
              )}
              {selectedButton === 5 && (
                <img src={restaurent} alt="mini theatre" id="m3m restaurent" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipClub;
