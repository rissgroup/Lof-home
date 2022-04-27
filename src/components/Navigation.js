import React,{useState} from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBIcon,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import logo from '../assets/logo.png'
export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
       <MDBNavbar expand='lg' light className='for-height fixed-top pt-0 pt-md-4 '>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBNavbarBrand className='mx-auto my-auto mt-2 nav-logo d-sm-block d-md-none d-lg-none text-center fixed' href='#'><img src={logo} alt="" /></MDBNavbarBrand>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' className='mt-3 me-3 link-color'>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' className='mt-3 me-3 link-color'>LOF platform</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' className='mt-3 me-3 link-color'>Become a creator</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' className='mt-3 me-3 link-color'  >FAQ</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarBrand className='mx-auto my-auto mt-2 nav-logo d-none d-md-block d-lg-block' href='#'><img src={logo} alt="" /></MDBNavbarBrand>
            <div className='my-auto mb-3 me-2'>
            <MDBBtn  className='me-2 for-btn1 mt-2' type='button'>
          Sign up
        </MDBBtn>
            <MDBBtn  className='me-2 for-btn mt-2' type='button'>
          Sign in
        </MDBBtn>
            </div>
          </MDBNavbarNav>
           
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  )
}