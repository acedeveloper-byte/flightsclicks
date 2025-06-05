"use client";
import { useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Card, Dropdown, ButtonGroup, Button   } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import CustomerCard from "./CustomerCard";




const SearchEngine = () => {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [date, setDate] = useState('');

    const options = ['New York', 'London', 'Paris', 'Tokyo'];

   const [flightClass, setFlightClass] = useState('Economy');
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });


  const handleChange = (type, delta) => {
    setPassengers((prev) => {
      const newVal = Math.max(0, prev[type] + delta);
      return { ...prev, [type]: newVal };
    });
  };

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

    return (
        <>
            <div style={{ position: "relative", height: "450px" }} className="home-page-image-layout">
                {/* Background */}
                <Image
                    src="/images/home-poster.jpg"
                    alt="Poster"
                    fill
                    style={{ objectFit: "cover", zIndex: 1 }}
                />
            </div>

            <div className="container main-form">
                 <section style={{ justifyContent: "center", alignItems: 'center' ,display: "flex" , marginTop : `10px`
}} >

         <h1 className="title">Travel the World for Less With Limited-Time Flight Deals!
                        </h1>
                        <p className="para-home">Soar to new destinations with us at low fares.</p>

          </section>
                <div className="row">
                    <div className="col-md-6">

        <CustomerCard    />

                                           </div>

                    <div className="col-md-6 ">
                        <Container className="my-3 form-layout-container">
                            <Row>
                                <Col xs={12} md={6} className="mb-3 position-relative">
                                    <Form.Label className="fw-bold small text-uppercase">
                                        From Origin
                                    </Form.Label>
                                    <FaMapMarkerAlt className="location-icon" />
                                    <Form.Select
                                        value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                        aria-label="From Origin"
                                    >
                                        <option value="" disabled>
                                            Your Destination
                                        </option>
                                        {options.map((loc) => (
                                            <option key={loc} value={loc}>
                                                {loc}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>

                                <Col xs={12} md={6} className="position-relative">
                                    <Form.Label className="fw-bold small text-uppercase">
                                        To Origin
                                    </Form.Label>
                                    <FaMapMarkerAlt className="location-icon" />
                                    <Form.Select
                                        value={dropoff}
                                        onChange={(e) => setDropoff(e.target.value)}
                                        aria-label="Drop Off Location"
                                    >
                                        <option value="" disabled>
                                            To Origin
                                        </option>
                                        {options.map((loc) => (
                                            <option key={loc} value={loc} className="option-layout">
                                                {loc}
                                            </option>
                                        ))}


                                    </Form.Select>
                                </Col>

                                <Col xs={12} md={6} className="position-relative">
                                    <Form.Label className="fw-bold small text-uppercase">
                                        Select Date
                                    </Form.Label>
                                    <FaCalendarAlt className="input-icon" />
                                    <Form.Control
                                        type="date"
                                        value={date || '2025-05-15'}
                                        onChange={(e) => setDate(e.target.value)}
                                        className={`custom-input ${!date ? 'placeholder-style' : ''}`}
                                    />

                                </Col>

                                <Col xs={12} md={6} className="position-relative">
                                    <Form.Label className="fw-bold small text-uppercase">
                                        Select Date
                                    </Form.Label>
                                    <FaCalendarAlt className="input-icon" />
                                    <Form.Control
                                        type="date"
                                        value={date || '2025-05-15'}
                                        onChange={(e) => setDate(e.target.value)}
                                        className={`custom-input ${!date ? 'placeholder-style' : ''}`}
                                    />

                                </Col>


                             

      {/* Passenger Dropdown */}
      <Col xs={12} md={4} className="position-relative my-3">
        <Form.Label className="fw-bold small text-uppercase">Passengers</Form.Label>
         <FaCalendarAlt className="input-icon" />

        <Dropdown className="w-100">
          <Dropdown.Toggle variant="light" className="w-100 custom-input text-start">
            {totalPassengers} Passenger{totalPassengers !== 1 ? 's' : ''}
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100 p-3">
            {['adults', 'children', 'infants'].map((type) => (
              <div key={type} className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-capitalize">{type}</span>
                <ButtonGroup size="sm">
                  <button className="btn btn-outline-secondary" onClick={() => handleChange(type, -1)}>-</button>
                  <button className="btn btn-outline-secondary" disabled>{passengers[type]}</button>
                  <button className="btn btn-outline-secondary" onClick={() => handleChange(type, 1)}>+</button>
                </ButtonGroup>
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Col>

      {/* Flight Class Dropdown */}
      <Col xs={12} md={4} className="position-relative my-3">
        <Form.Label className="fw-bold small text-uppercase">Flight Class</Form.Label>
        <Form.Select
          value={flightClass}
          onChange={(e) => setFlightClass(e.target.value)}
          className="custom-input"
        >
          <option>Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </Form.Select>
      </Col>

     
      <Col xs={12} md={4} className="position-relative my-5">
   <Button variant="primary" className="search-btn">
  <FaSearch className="me-2" />
  Search
</Button>
</Col>



                            </Row>


                        </Container>


                    </div>
                </div>
            </div>

        </>
    );
};

export default SearchEngine;
