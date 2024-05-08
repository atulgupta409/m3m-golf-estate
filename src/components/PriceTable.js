import React from "react";

const PriceTable = () => {
  return (
    <section id="pricing" className="price-table">
      <div className="container text-center">
        <h2>M3M Golf Estate Pricing</h2>
        <div className="row">
          <div className="table-responsive col-md-12">
            <table className="table table-bordered text-center">
              <tbody>
                <tr>
                  <td>Apartments</td>
                  <td>Type</td>
                  <td>Tower</td>
                  <td>Size (Sq.ft)</td>
                  <td>Resale Price (Per Sq.ft)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
