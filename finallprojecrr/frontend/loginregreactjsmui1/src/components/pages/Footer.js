import React from "react";
//import "../css/home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white sticky-bottom ">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                On Door Service
              </h5>
              <p></p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Services
              </h5>
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="/Plumber"
                  class="text-white"
                >
                  Plumbing
                </a>
              </p>
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="/Carpenter"
                  class="text-white"
                >
                  Carpentry
                </a>
              </p>
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="/Painting"
                  class="text-white"
                >
                  Painting
                </a>
              </p>
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="/Electrician"
                  class="text-white"
                >
                  Electrician
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Useful links
              </h5>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                  class="text-white"
                >
                  HOME
                </Link>
              </p>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/service"
                  class="text-white"
                >
                  Our Services
                </Link>
              </p>
              
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i>JUHU, Mumbai
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>ondoorservice@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 xxxxxxxxxx
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 xxxxxxxxxx
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2020 All rights reserved by :
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="/consumeraboutus"
                >
                  <strong class="text-info">Team 36 CDAC MUMBAI</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
