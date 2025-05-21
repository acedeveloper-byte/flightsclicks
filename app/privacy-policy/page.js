import Banner from '@/components/common/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
      const html = `<h3><span style="font-weight: bold;">Privacy Policy - Flights Clicks</span></h3>
<p><span style="font-weight: 400;">At Flights Clicks ("we", "our", "us"), accessible via flightsclicks.com, we aim at protecting your privacy. This Privacy Policy sets forth our practices regarding the collection, processing, disclosure, and protection of personal data obtained through your use of our website and related services.&nbsp;</span></p>
<p><span style="font-weight: 400;">By accessing or using our website, users acknowledge that they have read and agree to the terms of this Privacy Policy. If you do not agree to this privacy policy, please discontinue your use of our site.</span></p>
<h3><span style="font-weight: bold;">1. Information We Collect</span></h3>
<p><span style="font-weight: 400;">At Flights Clicks, we may gather the following types of information:</span></p>
<h4><span style="font-weight: bold;">a. Personal Information</span></h4>
<p><span style="font-weight: 400;">When you book travel or sign up for services, we may collect personal information such as:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Full name</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Email address</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Phone number</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Date of birth</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Passport or ID details (where applicable)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Billing address and payment information</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h4><span style="font-weight: bold;">b. Non-Personal Information</span></h4>
<p><span style="font-weight: 400;">Flights Clicks may also collect non-personal details such as:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">IP address</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Browser type</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Operating system</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Device type</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Pages visited&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">The total time spent on the site</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><span style="font-weight: 400;">2. How We Use Your Information</span></h3>
<p><span style="font-weight: 400;">We use the information we collect to:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Facilitate travel bookings and process transactions</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Send booking confirmations and travel-related updates</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Provide customer service and support</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Improve our website functionality and user experience</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Comply with legal obligations</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Prevent fraud and secure our services</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><span style="font-weight: 400;">3. Sharing of Information</span></h3>
<p><span style="font-weight: 400;">We may share your information with:</span></p>
<h4><span style="font-weight: bold;">a. Third-Party Travel Partners</span></h4>
<p><span style="font-weight: 400;">To complete your bookings, we may share necessary personal information with third-party airlines, hotels, and travel service providers.</span></p>
<h4><span style="font-weight: bold;">b. Service Providers</span></h4>
<p><span style="font-weight: 400;">We may utilize reliable third-party vendors to support the operation of our website, the execution of our business functions, or the delivery of services to you.</span></p>
<h4><span style="font-weight: bold;">c. Legal Obligations</span></h4>
<p><span style="font-weight: 400;">We may disclose your information to comply with legal requirements, such as a subpoena, court order, or other governmental request.</span></p>
<h4><span style="font-weight: bold;">4. Cookies and Tracking Technologies</span></h4>
<p><span style="font-weight: 400;">Flights Clicks uses cookies, web beacons, and other similar technologies to:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Customize content and advertisements</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Analyze website traffic and user behavior</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Remember your preferences for future visits</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">You may opt out of certain tracking by adjusting your browser settings or visiting opt-out tools where applicable.</span></p>
<h3><span style="font-weight: 400;">5. Data Security</span></h3>
<p><span style="font-weight: 400;">We implement a variety of security measures to maintain the safety of your personal information. However, no system is completely secure, and we can&rsquo;t guarantee the complete security&nbsp; of your data transmitted to us electronically.</span></p>
<h3><span style="font-weight: 400;">6. Your Rights</span></h3>
<p><span style="font-weight: 400;">Depending on your jurisdiction, you may have the following rights:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Access to the personal information we hold about you</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Request correction or deletion of your data</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Withdraw consent for data processing</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Object to certain uses of your information</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Request a copy of your data in a portable format</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">To exercise your rights, please contact us at </span><strong>privacy@flightsclicks.com</strong><span style="font-weight: 400;">.</span></p>
<h3><span style="font-weight: 400;">7. Third-Party Links</span></h3>
<p><span style="font-weight: 400;">Our website may contain links to third-party websites. Flights Clicks should not be held liable for any content or the privacy practices of those sites. We advise you to check the privacy policies of these sites before using them.</span></p>
<h3><span style="font-weight: 400;">8. Changes to This Privacy Policy</span></h3>
<p><span style="font-weight: 400;">We may update this Privacy Policy from time to time. The modifications we make will be posted on this page immediately. Keep checking the page periodically to stay informed.</span></p>
<h3><span style="font-weight: 400;">9. Contact Us</span></h3>
<p><span style="font-weight: 400;">If you have any questions or concerns about this Privacy Policy or how we handle your personal data, Please contact us at</span></p>
<p><span style="font-weight: 400;">Flights Clicks</span></p>
<p><span style="font-weight: 400;">Email: support@flightsclicks.com</span></p>`

  return (
    <>
        <Header />
      <Banner page={"Privacy Policy"} />
      <section id="privacy-page-section">
       <div dangerouslySetInnerHTML={{__html  :html}}/>
      </section>
      <Footer />
    </>
  )
}

export default page
