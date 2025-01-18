// src/components/Services.js
import React from 'react';

function Services() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Provided Services</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card shadow-sm">
            <img src="images/image7.jpg" className="card-img-top" alt="Wedding Service" />
            <div className="card-body">
              <h5 className="card-title">Wedding Photography</h5>
              <p className="card-text">Capture your special day with professional wedding photography. Let us make your memories timeless.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src="images/image5.jpg" className="card-img-top" alt="Birthday Party Service" />
            <div className="card-body">
              <h5 className="card-title">Birthday Photography</h5>
              <p className="card-text">Preserve the fun moments from your birthday celebration with our creative and joyful photography services.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src="images/image6.jpg" className="card-img-top" alt="Family Portraits" />
            <div className="card-body">
              <h5 className="card-title">Family Portraits</h5>
              <p className="card-text">Create beautiful memories with your family through professional portraits that capture the love and connection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
