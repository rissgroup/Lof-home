import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
  } from 'mdb-react-ui-kit';
  import twit from '../assets/icons/Twitter.svg';
  import telegram from '../assets/icons/telegram 1.svg';
  import instagram from '../assets/icons/instagram.svg';
  import reddit from '../assets/icons/reddit.svg';
  import discord from '../assets/icons/discord.svg';
  import heart from '../assets/icons/Herat purple 1.svg';


export default function Bottomnav() {
  return (
    <>
    <MDBContainer fluid>
          <MDBRow className="py-2">
            <MDBCol md={3} sm={12} lg={3} className="text-sm-center">
              <a href="" className="me-1">
                <img src={twit} alt="" />
              </a>
              <a href="" className="me-1">
                <img src={telegram} alt="" />
              </a>
              <a href="" className="me-1">
                <img src={instagram} alt="" />
              </a>
              <a href="" className="me-1">
                <img src={reddit} alt="" />
              </a>
              <a href="" className="me-1">
                <img src={discord} alt="" />
              </a>
              <a href="" className="me-1">
                <img src={heart} alt="" />
              </a>
            </MDBCol>
            
            <MDBCol
              md={6}
              sm={12}
              lg={6}
              className="text-lg-center text-md-center text-sm-start text-center "
            >
              <a href="" className="me-lg-4 me-md-4 me-2 text-white for-size ">
                Term and Condition
              </a>
              <a href="" className="me-lg-4 me-md-4 me-2 text-white for-size">
                Privacy
              </a>
              <a href="" className="me-lg-4 me-md-4 me-2 text-white for-size">
                Risk Policy
              </a>
              <a href="" className="me-lg-4 me-md-4 me-2 text-white for-size">
                Contact
              </a>
            </MDBCol>
            <MDBCol md={3} sm={12} lg={3}>
              <p className="for-txt text-white text-lg-end text-md-end text-center">
                
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    
    </>
  )
}
