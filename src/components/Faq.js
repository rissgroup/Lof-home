import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
export default function faq() {
  return (
    <>
      <section className="fullbg">
        <MDBContainer className="header">
          <MDBRow className="d-flex flex-row align-items-center justify-content-center">
            <MDBCol  md={6} lg={6}  sm={12} className="faq-head "   >
              <h1 className="">FAQ</h1>
              <h5>
                For<span> Content creators</span>
              </h5>
            </MDBCol>
            <MDBCol md={6} lg={6} sm={12} className="que-ans">
              {" "}
              <MDBRow className="right-sec py-4 px-3 my-4 ">
                <MDBCol md={12} lg={12} sm={6}>
                  <h3>How much money will I earn with LOF?</h3>
                  <p className="pr">
                    As a Creator you earn 80% of everything you sell on the
                    site. Users can subscribe and pay monthly to you or
                    you can sell media directly to them at a fixed one time
                    cost.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="right-sec py-4 px-3 my-4">
                <MDBCol md={12} lg={12} sm={6}>
                  <h3>How are my earnings calculated?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="right-sec py-4 px-3 my-4">
                <MDBCol md={12} lg={12} sm={6}>
                  <h3>How frequent are payouts?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="right-sec py-4 px-3 my-3">
                <MDBCol md={12} lg={12} sm={6}>
                  <h3>What payment methods are used for payouts?</h3>
                  <p>
                    As a Creator you earn 80% of everything you sell on the
                    site. Users can subscribe and pay monthly to you or
                    you can sell media directly to them at a fixed one time
                    cost.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
