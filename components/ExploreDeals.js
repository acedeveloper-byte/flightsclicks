import React from 'react'

const ExploreDeals = () => {
  return (
    <div>
       <div className="container text-center explore-deals" >
      <h6 className="text-danger fw-bold">Hot Deals Of The Week</h6>
      <h2 className="fw-bold text-danger mb-4">Top Explore Rate Deals</h2>

      <div className="row justify-content-center mb-4">
        <div className="col-md-4 text-start">
          <img src="/images/destinations/alabama.jpg" alt="Alabama" className="img-fluid rounded" />
          <p className="mt-2 mb-0"><small>38 Reviews ⭐⭐⭐⭐⭐</small></p>
          <h5 className="fw-bold">Alabama</h5>
          <p className="mb-1">Per Person <span className="text-danger">$600</span></p>
          <a href="#" className="text-decoration-underline">Book Now</a>
        </div>

        <div className="col-md-4 d-flex align-items-center">
          <div>
            <p>
              Travel has helped us to understand the meaning of life and it has helped us become better people.
              Each time we travel, we see the world with new eyes.
            </p>
            <p>
              Travel has helped us to understand the meaning of life and it has helped us become better people.
              Each time we travel, we see the world with new eyes.
            </p>
            <button className="btn btn-dark mt-3" style={{borderRadius: '0px'}}>View all Deals</button>
          </div>
        </div>

        <div className="col-md-4 text-start">
          <img src="/images/destinations/alaska.jpg" alt="Alaska" className="img-fluid rounded" />
          <p className="mt-2 mb-0"><small>38 Reviews ⭐⭐⭐⭐⭐</small></p>
          <h5 className="fw-bold">Alaska</h5>
          <p className="mb-1">Per Person <span className="text-danger">$600</span></p>
          <a href="#" className="text-decoration-underline">View Detail</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ExploreDeals
