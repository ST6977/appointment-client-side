import React from "react";
import Navigation from "../Shared/Navigation/Navigation";

const About = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="container">
        <h1 className="text-center mt-5"> About Us</h1>

        <section className="d-flex justify-content-between  ">
          <img
            className="w-50 img-fluid"
            src="https://b2b.sharetrip.net/img/landingPage/supportCenter.png"
            alt=""
          />

          <p>
            Schedule your Appointment, Classes, and Interviews with Picktime.
            Easily manage your Rooms and Equipment with a few clicks. With our
            Online Booking feature, clients can make bookings 24x7. All you have
            to do is signup, create your account
            <br />
            Easily process your payments online in a secure manner. Choose to
            either take deposits or full payments in advance. Select from
            Payment Processors like PayPal, Stripe and Square. Generate Invoices
            easily
            <br />
            We have more than 400 employees, who are all experts in their
            respective fields. They have the experience and professionalism to
            understand each and every customer's requirements and fulfill it.
            With today’s era of digitalization, where everyone has a lot of
            information and choice in hand, our clients still choose us. Because
            we provide the best services
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
