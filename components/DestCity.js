import React from 'react'

const DestCity = () => {
     const places = [
    { name: 'Arizona', image: '/images/arizona.jpg' },
    { name: 'Arkansas', image: '/images/arkansas.jpg' },
    { name: 'California', image: '/images/california.jpg' },
    { name: 'Colorado', image: '/images/colorado.jpg' },
  ];
  return (
    <div>
      <div className="container my-5">
      <div className="row">
        {places.map((place, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <img src={place.image} alt={place.name} className="img-fluid rounded" />
            <p className="mt-2 mb-0"><small>38 Reviews ⭐⭐⭐⭐⭐</small></p>
            <h5 className="fw-bold">{place.name}</h5>
            <p className="mb-1">
              Per Person <span className="text-danger">$400</span>
            </p>
            <a href="#" className="text-decoration-underline">View Detail</a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default DestCity
