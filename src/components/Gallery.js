import React from 'react';

function Gallery() {
  return (
    <div id="gallery" className="container py-5">
      <h2 className="text-center mb-4">Our Beautiful Work</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src="images/image1.jpg" className="card-img-top" alt="Event 1" />
            <div className="card-body">
              <h5 className="card-title">Wedding Shoot</h5>
              <p className="card-text">A beautiful wedding captured in the best light.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="images/image2.jpg" className="card-img-top" alt="Event 2" />
            <div className="card-body">
              <h5 className="card-title">Birthday Party</h5>
              <p className="card-text">Capturing memories from a fun-filled birthday.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="images/image3.jpg" className="card-img-top" alt="Event 3" />
            <div className="card-body">
              <h5 className="card-title">Family Portrait</h5>
              <p className="card-text">Timeless moments with loved ones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
