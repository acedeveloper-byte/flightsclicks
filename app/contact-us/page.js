import Banner from '@/components/common/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <>
        <Header />
        <Banner page={"Contact Us"} />

            <div class="contact-section position-relative py-5 bg-light">
               

                <div class="container position-relative z-1">
                    <div class="row align-items-start">

                        <div class="col-lg-5 mb-4">
                            <div class="bg-white p-4 rounded shadow-sm h-100">
                                <h6 class="text-primary mb-3">Information:</h6>
                                <p class="text-muted mb-4">Reach us anytime for support, inquiries, or booking assistance today.</p>

                                <ul class="list-unstyled">
                                    <li class="mb-3">
                                        <strong>Phone:</strong> <br />
                                        <a href="tel:+44 80 8599 8705" class="text-decoration-none text-dark"> +44 80 8599 8705</a>
                                    </li>
                                    <li class="mb-3">
                                        <strong>Email:</strong> <br />
                                        <a href="mailto:info@flightsclicks.com" class="text-decoration-none text-dark">info@flightsclicks.com</a>
                                    </li>
                                    <li class="mb-0">
                                        <strong>Address:</strong> <br />
                                        <span>168 Great Portland Street <br /> London, W1W 5PF</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="bg-white p-4 rounded shadow-sm">
                                <h4 class="mb-4 text-dark">Get in touch — we’re here to listen and help!</h4>

                                <form  >
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <input type="email" name="email" class="form-control" placeholder="Your Email" required />
                                        </div>
                                        <div class="col-12 mb-3">
                                            <input type="text" name="website" class="form-control" placeholder="Your Website" />
                                        </div>
                                        <div class="col-12 mb-3">
                                            <textarea name="message" rows="5" class="form-control" placeholder="Your Message..." required></textarea>
                                        </div>
                                       
                                        <div class="col-12">
                                            <button type="submit" name="message" class="btn btn-primary px-4">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default page
