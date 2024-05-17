import React, { useRef, useState } from "react";
import contactImg from "../assets/m3m-golf-estate-main-contact.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkValidation } from "../utils/validate";

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const PageLocation = window.location.href;
  const dateTimeString = new Date().toLocaleString();
  const [date, time] = dateTimeString.split(", ");
  const notifySuccess = () =>
    toast.success("Thank You for submitting the query!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyError = () =>
    toast.error("Error Ocurred!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleSheet = async () => {
    const message = checkValidation(
      name.current.value,
      email.current.value,
      phone.current.value
    );
    setErrorMessage(message);
    if (!message) {
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/dwarkaexpressway/google_sheets/CQjlqWJyvQCdwALG?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [
                date,
                time,
                PageLocation,
                "",
                name.current.value,
                email.current.value,
                phone.current.value,
              ],
            ]),
          }
        );
        name.current.value = "";
        email.current.value = "";
        phone.current.value = "";
        await response.json();
        console.log("success");
        notifySuccess();
      } catch (error) {
        console.log(error);
        notifyError();
      }
    }
  };

  // const submitFormHandler = async () => {
  //   const message = checkValidation(
  //     name.current.value,
  //     email.current.value,
  //     phone.current.value
  //   );
  //   // setErrorMessage(message);
  //   if (!message) {
  //     setIsSending(true);
  //     try {
  //       await sendEmail(
  //         name.current.value,
  //         email.current.value,
  //         phone.current.value,
  //         PageLocation
  //       );
  //       handleSheet();
  //       notifySuccess();
  //     } catch (error) {
  //       console.error("Error sending email:", error);
  //       notifyError(error.message);
  //     } finally {
  //       setIsSending(false);
  //     }
  //   }
  // };

  return (
    <div className="container main_container">
      <ToastContainer />
      <div className="text-center">
        <h2 className="main_title d-inline-block">
          Buy apartment at <br className="desk_hide" />
          <span>m3m golf estate</span>
        </h2>
      </div>
      <div className="row contact_agent_wrapper">
        <div className="col-md-6 mob_hide">
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
          <form
            className="agent_contact_form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Name*"
                className="form-control"
                ref={name}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email*"
                className="form-control"
                required
                ref={email}
              />
            </div>
            <div className="form-group">
              <input
                type="mob"
                placeholder="Mobile*"
                className="form-control"
                ref={phone}
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
            <button
              className="btn text-white font-weight-bold thm-button btn-block"
              onClick={handleSheet}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
