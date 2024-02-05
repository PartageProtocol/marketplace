import React from "react";
import partimg from "../../assets/img/partage-log.png";


const Marketplacehead = ({ onClick }) => {


  return (
    <>
      <section id="hero">
        <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
          <div className="text-center">
            <img src={partimg} id="partimg" alt="..." />
          </div>
          <h1>PARTAGE</h1>
          <h2>Shared Utilities on Near</h2>
          <div className="d-flex">
            <a onClick={onClick} className="btn-get-started scrollto">
              <b>Connect Wallet</b>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketplacehead;
