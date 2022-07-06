import React from 'react';
import "../../Styles/Trick.css"
const Trick = ({ trick }) => {
  const { img, tainer, name, details, tainerImg } = trick;
  return (
    <div className="col-lg-4">
      <div className="position-container">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="tricks-card">
          <div className="tricks-card-body">
            <div className="d-flex align-items-center">
              <img src={tainerImg} alt="" />
              <h5 className="trick-name ms-3">{tainer}</h5>
            </div>
            <h6 className="taining">{name}</h6>
            <h6 className="taining-details">{details}</h6>
            <hr className="border-line" />
            <span className="learn-more d-flex align-items-center">Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="#F58859" className="bi bi-arrow-right-short" viewBox="0 0 20 15">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trick;