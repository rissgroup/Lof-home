import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
export default function Hero() {
  return (
    <>
      <section className="for-bg bg-dark">
        
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md={6} sm={12} lg={6} className="main-heading pt-5 ">
              <h3 className="ps-5">LONELY</h3>
              <h4 className="ps-5">FANS</h4>
            </MDBCol>
            <MDBCol md={2} sm={12} lg={2}></MDBCol>
            <MDBCol md={4} sm={12} lg={4} className=" pt-5 ps-5 pe-5 fans-heading">
              <h3>
                A revolutionary <br />{" "}
                <span className="for-heading-color"> fan platform </span>
              </h3>
              <p className="heading-txt">
                Sell any type of content. Esay to start!
              </p>
              <p className="heading-txt1">
                Completely free of judgement. No surprise account <br />{" "}
                closings or changes in allowed content. Payments <br /> easily
                and in time.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
      </section>
    </>
  );
}
