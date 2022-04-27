import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import logo from "../assets/logo.png";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar  expand="lg" className="py-2 py-md-4 for-height  " fixed='top'>
      <MDBContainer fluid>
        <MDBNavbarBrand className="d-lg-none" href="#">
          <img src={logo} alt="" className="img-fluid" />
        </MDBNavbarBrand>

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
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link link-color active" href="#home">
                Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-color" href="#platform">
                LOF platform
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-color" href="#becomeCreator">
                Become a creator
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-color" href="#faq">
                FAQ
                </a>
              </li>
            </ul>

            <MDBNavbarBrand className="d-none d-lg-block" href="#">
              <img src={logo} alt="" className="img-fluid logo" />
            </MDBNavbarBrand>

            {/* <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link btn for-btn" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn for-btn1" href="#">
                  Link
                </a>
              </li>
            </ul> */}
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link btn for-btn1" href="#">
                Sign up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn for-btn" href="#">
                Sign in
                </a>
              </li>
            </ul>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
