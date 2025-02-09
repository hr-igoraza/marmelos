import React from "react";
import logo from "/images/logo.svg";

const Footer = () => {
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p className=" text-[#ffffff] semibold ">COMPANY</p>

                <ul className="mt-5 space-y-4 text-sm regular">
                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      Legal Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[#ffffff] semibold">
                  HELP CENTER
                </p>

                <ul className="mt-5 space-y-4 text-sm regular">
                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      Find A Property
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      How To Host?
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      Why Us?
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      Rental Guides
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[#ffffffff] semibold ">CONTACT INFO</p>

                <ul className="mt-5 space-y-4 text-sm regular ">
                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      Phone : +91 1234567890
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      Email : company@email.com
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[#ffffff] transition hover:opacity-75"
                    >
                      Location: 100 Smart Street, New York, USA
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

          <p className="text-xs text-[#ffffff] opacity-75">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
