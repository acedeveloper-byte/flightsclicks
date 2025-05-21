import Banner from '@/components/common/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {

    const html  = `<h2><strong>Terms and Conditions - Flights Clicks&nbsp;</strong></h2>

<p><span style="font-weight: 400;">Welcome to Flights Clicks ("we", "us", "our"). These Terms and Conditions ("Terms") govern your access to and use of our website, flightsclicks.com, including any services, features, and content offered through the site (collectively, the &ldquo;Services&rdquo;).</span></p>

<p><span style="font-weight: 400;">By using or accessing flightsclicks.com, you agree to these Terms. If you do not agree with any part of these Terms, please do not use our site or services.</span></p>

<h3><span style="font-weight: 400;">1. Nature of Our Services</span></h3>
<p><span style="font-weight: 400;">Flights Clicks is a third-party travel search and booking aggregator. We do not own or operate airlines, hotels, or other travel service providers. We facilitate your access to third-party booking platforms that offer travel products such as flights, hotels, or packages.</span></p>

<p><span style="font-weight: 400;">When you book a service via a link or form on our site, you are completing your transaction with a third-party provider. Flights Clicks is not a party to the booking contract. Please review the terms and conditions of the respective provider before completing any purchase.</span></p>

<h3><span style="font-weight: 400;">2. User Responsibilities</span></h3>
<p><span style="font-weight: 400;">By using our Services, you agree to:</span></p>

<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Provide accurate and complete information when required</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Use the website only for lawful purposes</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Not misuse or interfere with the operation of the website</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Respect the intellectual property rights of Flights Clicks and third-party providers</span></li>
</ul>
<p><br /><br /></p>
<h3><span style="font-weight: 400;">3. Booking and Payments</span></h3>
<p><span style="font-weight: 400;">All bookings made through Flights Clicks are fulfilled by third-party travel providers. Payment terms, refund policies, cancellation rules, and change fees are governed by those providers. We recommend reviewing their terms carefully before proceeding with a booking.</span></p>

<p><span style="font-weight: 400;">Flights Clicks is not responsible for:</span></p>

<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Booking errors caused by inaccurate information provided by the user</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Disputes arising from cancellations, delays, refunds, or service delivery by third parties</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Additional charges imposed by airlines or providers (e.g., baggage fees, taxes, etc.)</span></li>
</ul>

<h3><span style="font-weight: 400;">4. Third-Party Links and Content</span></h3>
<p><span style="font-weight: 400;">Our website may contain links to third-party websites or services that are not owned or controlled by Flights Clicks. Our site should not be held liable for the content, privacy practices, or terms of these third-party sites. The user can access them at their own risk.</span></p>

<h3><span style="font-weight: 400;">5. Intellectual Property</span></h3>
<p><span style="font-weight: 400;">All content, trademarks, logos, and other materials on flightsclicks.com are the property of Flights Clicks or our partners and are protected by intellectual property laws. The user may not reproduce, distribute or modify any part of our website without prior written permission.</span></p>

<h3><span style="font-weight: 400;">6. Disclaimer of Warranties</span></h3>
<p><span style="font-weight: 400;">Flights Clicks provides its Services on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. We do not guarantee the accuracy, availability, or reliability of information displayed on our site or obtained through third-party providers.</span></p>

<p><span style="font-weight: 400;">We do not guarantee any warranties, whether express or implied, including those related to merchantability, suitability for a specific purpose, or protection against infringement.</span></p>

<h3><span style="font-weight: 400;">7. Limitation of Liability</span></h3>
<p><span style="font-weight: 400;">As far as legally permissible, Flights Clicks will not be held responsible for any direct or indirect losses, including incidental, consequential, or punitive damages, resulting from:</span></p>

<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Your use of or inability to use the site</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Third-party services or products booked through our platform</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Errors or inaccuracies in third-party content</span></li>
</ul>

<h3><span style="font-weight: 400;">8. Changes to Terms</span></h3>
<p><span style="font-weight: 400;">Flights Clicks may update these Terms from time to time. Modifications to these Terms will be reflected on this page. Continued use of the site following such updates displays your agreement and acceptance of the revised Terms."</span></p>

<h3><span style="font-weight: 400;">9. Termination</span></h3>
<p><span style="font-weight: 400;">If we believe you've broken these Terms or are using the site in a harmful or illegal way, we may stop your access to the site, without warning and at our discretion."</span></p>

<h3><span style="font-weight: 400;">10. Governing Law</span></h3>
<p><span style="font-weight: 400;">These Terms will be governed by the laws of the United States, without consideration of any conflict of law rules that might apply the laws of another jurisdiction. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts in the USA.</span></p>

<h3><span style="font-weight: 400;">11. Contact Us</span></h3>
<p><span style="font-weight: 400;">If you have any questions or concerns about these Terms, please contact us at:</span></p>

<p><span style="font-weight: 400;">Flights Clicks</span></p>
<p><span style="font-weight: 400;">Email: support@flightsclicks.com</span></p>`
  return (
    <>
        <Header />
      <Banner page={"Terms and Conditions"} />
      <section id="terms-page-section">
          <div dangerouslySetInnerHTML={{__html  :html}}/>
      </section>
      <Footer />
    </>
  )
}

export default page
