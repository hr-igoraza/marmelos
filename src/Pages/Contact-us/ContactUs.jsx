import React from "react";
import "./contact.css";
import Form from "../../Components/Form/Form";

const ContactUs = () => {
  return (
    <>
      <section className="contact-hero">
        <div className="container mx-auto flex  justify-center md:h-[120vh] h-[60v] content-center lg:p-0 py-[100px] px-2">
          <div className="content-center">
            <h1 className="text-[#ffffff]  font-[700] text-center fs-65 ">
              Interested?Let’talk!
            </h1>
            <p className="mx-auto mt-10 text-center text-white md:w-1/2">
              We'd love to hear from you! Whether you have questions about our
              homestay, want to inquire about availability, or simply want to
              learn more about our region, please don't hesitate to reach out.
              <span className="text-primary-green">
                info@yourresort.com
              </span>
              or
              <span className="text-primary-green">hello@yourresort.com</span>,
              and we’ll take it from there
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto content-center">
        <Form />
      </div>

      {/* ================== Location */}

      <section className="location container mx-auto  mb-30 px-5">
        <h2 className="fs-65 font-[700] mx-auto text-center">Our Location</h2>

        <div className="pt-10">
          <div class="mapouter ">
            <div class="gmap_canvas">
              <iframe
                className="w-full md:h-[700px] h-[30vh] "
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.830038105611!2d76.2997585!3d9.628710499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087d006609e939%3A0x926a631a668e7ec5!2sMarmelos%20Homestay!5e1!3m2!1sen!2sin!4v1740943773967!5m2!1sen!2sin"
                frameborder="0"
                // scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://online-timer.me/"></a>
              <br />
              <a href="https://online.stopwatch-timer.net/"></a>
            </div>
          </div>
        </div>
      </section>

      <section className="relax container-full my-15">
        <div className="container mx-auto content-center md:h-[90vh]">
          <h2 className="fs-65  text-white font-[700]  text-center">
            "Experience the Magic of Chatti Choru A Taste of Kerala!
          </h2>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
