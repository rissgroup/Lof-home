import { MDBCol, MDBContainer, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
// import Navigation from './Navigation';
import Animation from "./semicomponents/Animation";
import Sliderleft from "./semicomponents/Sliderleft";

export default function Creator() {
  return (
    <>
      <section className="creator-bg bg-dark">
        <MDBContainer>
          <MDBRow>
            <MDBCol md={6} lg={6} sm={12} className="creator-heading ">
              <h1>
                Become a c<span className="main-color">reator</span>
              </h1>
              <p>
                Create an account and we’ll get you started in no time! <br />
                More features, profit and freedom - with dedicate support in
                everything.
              </p>
              <MDBBtn className="me-2 for-creator-btn mt-2 py-2 px-5" type="button">
                Create an account
              </MDBBtn>
            </MDBCol>
            <MDBCol md={6} lg={6} sm={12}>
              <MDBRow>
                <MDBCol md={6} lg={6} sm={12}>
                  <Animation />
                </MDBCol>
                <MDBCol md={6} lg={6} sm={12}>
                  <Sliderleft />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
