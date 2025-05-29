import Banner from '@/components/common/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
const generateMetaData = () => {
    return {
        title: "About Us | flightsclicks.com",
        description: ""
    };
};

const page = () => {
    const meta = generateMetaData();


    const html = `<h2><strong>About Us - Flights Clicks</strong></h2>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">At Flights Clicks, we believe that booking travel should be simple, fast, and affordable. We&rsquo;re a third-party travel booking platform designed to help you find the best flight deals from trusted travel providers around the world &ndash; all in one place.</span></p>
<p><span style="font-weight: 400;">Whether you're a frequent flyer, a budget traveler, or planning a once-in-a-lifetime trip, flightsclicks.com gives you the tools to compare prices, explore travel options, and book your ideal flight in just a few clicks.</span></p>
<h2><span style="font-weight: 400;">Book With Us For a Memorable Experience!</span></h2>
<p><span style="font-weight: 400;">Flights Clicks is committed to offering top-notch services to its users. From flight deals to amazing customer service, we will provide you with the best services.&nbsp; With Flights Clicks, you can:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Compare flights from major carriers and low-cost airlines</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Access exclusive deals and last-minute offers</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Book with confidence through secure third-party platforms</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Get helpful travel tips, guides, and booking support</span></li>
</ul>

<h3><span style="font-weight: 400;">Why Choose Flights Clicks?</span></h3>
<ul>
<li style="font-weight: 400;"><strong>Unbiased Flight Search </strong><span style="font-weight: 400;">&ndash; We don&rsquo;t promote one airline over another. Our goal is to help you find the best deal for you.</span></li>
</ul>

<ul>
<li style="font-weight: 400;"><strong>User-Friendly Experience</strong><span style="font-weight: 400;"> &ndash; Fast, clean, and easy-to-use interface designed to make travel planning stress-free.</span></li>
</ul>

<ul>
<li style="font-weight: 400;"><strong>No Hidden Fees </strong><span style="font-weight: 400;">&ndash; What you see is what you get. We show you clear pricing and let you book directly with our trusted partners.</span></li>
</ul>

<ul>
<li style="font-weight: 400;"><strong>Global Coverage</strong><span style="font-weight: 400;"> &ndash; From short domestic hops to long-haul international journeys, we help you find flights to virtually any destination worldwide.</span></li>
</ul>
<h3><span style="font-weight: 400;">Book With Us Now!</span></h3>
<p><span style="font-weight: 400;">Every day, thousands of users trust Flights Clicks to find the best travel options. Whether you're flying for business, leisure, or adventure, we&rsquo;re here to help you get there smarter.&nbsp; We aim to empower travelers by making flight booking more transparent, accessible, and hassle-free, so you can spend more time enjoying your journey and less time searching for it.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">&nbsp;So, go ahead and book your flight tickets as soon as possible for affordable fares. </span></p>` 
    
    return (
    <>
        <Header />
      <Banner page={"About us"} />
      <section id="about-page-section">
       <div dangerouslySetInnerHTML={{__html  :html}}/>
      </section>
      <Footer />
    </>
  )
}

export default page
