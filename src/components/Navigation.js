import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBCollapse,
  
} from "mdb-react-ui-kit";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar  expand="lg" className="py-2 py-md-4 for-height mt-md-3  " fixed='top'>
      <MDBContainer fluid>
        <Link className="navbar-brand d-lg-none" to='/'>
          <img src={logo} alt="" className="img-fluid" />
        </Link>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} className="">
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0  justify-content-between ">

            <ul class="navbar-nav  mt-2">
              <li class="nav-item d-flex justify-content-center">
                <Link class="nav-link link-color active  me-3" to="/">
                Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a className="nav-link link-color me-3" href="#platform">
                LOF platform
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a className="nav-link link-color me-3" href="#becomeCreator">
                Become a creator
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a className="nav-link link-color me-3" href="#faq">
                FAQ
                </a>
              </li>
            </ul>

            <Link className="navbar-brand d-none d-lg-block" to='/' >
              
              <img src={logo} alt="" className="img-fluid logo" />
            </Link>

            {/* <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link btn for-btn" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn for-btn1" href="#">
                  Link
                </a>
              </li>
            </ul> */}
            <div className=" ">
            <ul className="navbar-nav mt-2">
              <li className="nav-item mx-auto">
                <a className="nav-link btn for-btn1 me-2 px-3" href="#">
                Sign up
                </a>
              </li>
              
              <li className="nav-item mx-auto ">
                <a className="nav-link btn for-btn mt-sm-2" href="#">
                Sign in
                </a>
              </li>
            </ul>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
