import React from "react";
import useGetData from "../utils/useGetData";

const PriceTable = () => {
  const data = useGetData();
  return (
    <section id="pricing" className="price-table">
      <div className="container text-center">
        <h2>M3M Golf Estate Pricing</h2>
        <div className="row">
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
  );
};

export default PriceTable;
