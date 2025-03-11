import React from "react";
import logo from "/images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();



  const onAboutClick = () => {
    navigate("/");
    setTimeout(() => {
      const aboutSection = document.querySelector("#welcome");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };


  return (
    <>
      <footer className="green-bg montserrat ">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-[#ffffff]">
                <img src={logo} alt="logo" />
              </div>

              <p className="mt-4 max-w-xs text-[#ffffff]  text-[14px]">
                Discover Marmelos Homestay near Chethy Beach, Mararikulam—a
                serene Kerala retreat blending traditional charm with modern
                comforts and authentic local cuisine{" "}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p className=" text-[#ffffff] semibold ">HOMESTAY</p>

                <ul className="mt-5 space-y-4 text-sm regular text-[#ffffff] ">
                  <li className="text-[#ffffff] transition hover:opacity-75 cursor-pointer user-select-none">
                    <p onClick={onAboutClick}>About Us</p>
                  </li>
                  <li className="text-[#ffffff] transition hover:opacity-75">
                    <NavLink to="/touristdestinations" >
                      Tourist Destinations
                    </NavLink>
                  </li>
                  <li className="text-[#ffffff] transition hover:opacity-75">
                    <NavLink to="/food" >
                      Food Menu
                    </NavLink>
                  </li>
                  <li className="text-[#ffffff] transition hover:opacity-75">
                    <NavLink to="/blog" >
                      Blog
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[#ffffff] semibold">
                  BOOKING
                </p>

                <ul className="mt-5 space-y-4 text-sm regular text-[#ffffff]  ">
                  <li className="text-[#ffffff] transition hover:opacity-75">
                    <NavLink to="/rooms/301" >
                      Single Room
                    </NavLink>
                  </li>

                  <li className="text-[#ffffff] transition hover:opacity-75">
                    <NavLink to="/rooms/302" >
                      Standard Twin Room
                    </NavLink>
                  </li>

                  <li className="text-[#ffffff] transition hover:opacity-75">
                    <NavLink to="/rooms/303" >
                      Family Room
                    </NavLink>
                  </li>

                </ul>
              </div>

              <div>
                <p className="font-medium text-[#ffffffff] semibold ">
                  CONTACT INFO
                </p>

                <ul className="mt-5 space-y-4 text-sm regular">
                  <li>
                    <a
                      href="https://wa.me/919288100118?text=Hi%20there!%20I’m%20interested%20in%20booking%20your%20homestay.%20Could%20you%20confirm%20availability%20and%20share%20pricing/details?%20Thanks!%20😊"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      +91 9288100118
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://wa.me/919074883442?text=Hi%20there!%20I’d%20like%20to%20inquire%20about%20Marmelos%20Homestay.%20Can%20you%20provide%20more%20details?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      +91 9074883442
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://wa.me/918138836543?text=Hi%20there!%20I’d%20like%20to%20know%20more%20about%20Marmelos%20Homestay.%20Can%20you%20share%20availability%20and%20pricing?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      +91 8138836543
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:marmeloshomestay@gmail.com"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      marmeloshomestay@gmail.com
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://maps.app.goo.gl/4Mvm6AMaMCkN1PbN8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      Marmelos Homestay, Thaikkoottathil, Chethy P.O,
                      Mararikulam North, 688530, Alappuzha, Kerala
                    </a>
                  </li>
                </ul>

                <ul className="mt-5 flex gap-6">
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      <img src="/images/footer/fb.svg" alt="fb" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      <img src="/images/footer/twitter.svg" alt="twitter" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      <img src="/images/footer/insta.svg" alt="insta" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      <img src="/images/footer/linkedin.svg" alt="linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" md:flex justify-between ">
            <p className="text-xs text-[#ffffff] opacity-75">
              &copy; Copyright & All Rights Reserved 2025 -
              <a
                href="https://igoraza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 "
              >
                <strong>IGORAZA PRIVATE LIMITED</strong>
              </a>
            </p>

            <NavLink className="text-white fs-14 md:mt-0 mt-10" to="/privacypolicies">Privacy Policies</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
