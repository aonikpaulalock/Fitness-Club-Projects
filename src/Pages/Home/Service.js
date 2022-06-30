import React from 'react';
import "../../Styles/Service.css"
const Service = ({ service }) => {
  const { img, des, name } = service;
  return (
    <div className="col-lg-4 mt-5">
      <div className="card border-0">
        <img className="card-img-top" src={img} alt="" />
        <div className="card-body p-0">
          <h5 className="title">{name}</h5>
          <p className="text">{des}</p>
          <span className="learn-more d-flex align-items-center">Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="#F58859" class="bi bi-arrow-right-short" viewBox="0 0 20 15" className='fw-bold'>
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
          </svg>
        </span>
      </div>
    </div>
    </div >
  );
};

export default Service;