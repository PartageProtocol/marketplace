import React from "react";

const Mynfthead = ({ onClick }) => {
  return (
    <>
      <section id="smallhero">
        <div className="smallhero-container">
          <div className="col-lg-6 order-1 order-lg-1">
            <h1>MY DASHBOARD</h1>
            {/* <h2>Minted on <span>12 Oct 2023</span></h2> */}
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-2 content">
            {/* second column content */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mynfthead;
