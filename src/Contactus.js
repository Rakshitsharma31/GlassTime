import React from "react";
import "./Contactus.css";
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
const Contact = () => {
    return (
    <div className="bg">
    <div className="contactcontainer">
        <h1>CONTACT US</h1>
        <h2>Office At:</h2>
        <p>183, New Defence Colony, Muradnagar, Uttar Pradesh 201206<br/><br/>
        <b>E-Mail :</b> glasstime2008@gmail.com<br/>
        <b>Website :</b> www.glassTime.in<br/>
        <b>Contact Person :</b> Mr. Surender Sharma<br/>
        <b>Designation :</b> Editor and Publisher<br/>
        <b>Mobile :</b> +91-8368275993 , +91-7599449709<br/>
        <b>E-Mail :</b> glasstime2008@gmail.com </p>
        <span>Follow Us on:</span>
        <div className="social-media">
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaTwitterSquare className="twitter" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
          </div>
    </div>
    </div>
);
};
export default Contact;