import React from "react";
import Navbar from "./Navbar";
import useGetData from "../utils/useGetData";
import Footer from "./Footer";

const Pricing = () => {
  const data = useGetData();

  return (
    <>
      <Navbar />
      <section className="inner_banner">
        <div className="overlay">
          <div className="container">
            <div className="title">
              <h4>GOLF ESTATE GURGAON PRICING</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="review_and_blog">
        <div className="container">
          <div className="row mt-5">
            <div className="text-center">
              <h4 className="main_title2 d-inline-block">
                M3M Golf estate <span>Pricing</span>
              </h4>
            </div>
            <div className="table-responsive col-md-12">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Apartments</th>
                    <th>Type</th>
                    <th>Tower</th>
                    <th>Size (Sq.ft)</th>
                    <th>Resale Price (Per Sq.ft)</th>
                  </tr>
                </thead>
                <tbody>
                  {data[0]?.price?.map((price) => (
                    <tr key={price?.id}>
                      <td>{price?.apartment}</td>
                      <td>{price?.Type}</td>
                      <td>{price?.Tower}</td>
                      <td>{price?.Size}</td>
                      <td>
                        {price?.price?.toString()?.toLowerCase() ===
                        "call for price" ? (
                          <a href="tel:9999063322">Call For Price</a>
                        ) : (
                          price?.price
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
