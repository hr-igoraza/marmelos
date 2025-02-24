import React from "react";
import "./contact.css";
import Form from "../../Components/Form/Form";

const ContactUs = () => {
  return (
    <>
      <section className="contact-hero">
        <div className="container mx-auto flex  justify-center md:h-[120vh] h-[60v] content-center">
          <div className="content-center">
            <h1 className="text-[#ffffff]  font-[700] text-center fs-65 ">
              Interested?Let’talk!
            </h1>
            <p className="mx-auto mt-10 text-center text-white md:w-1/2">
              We’ll get back to you promptly to start planning your perfect
              getaway. Not a fan of forms? No worries! Drop us a message at{" "}
              <span className="text-primary-green">info@yourresort.com </span>{" "}
              or{" "}
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
                src="https://maps.google.com/maps?q=thoppumpady&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
