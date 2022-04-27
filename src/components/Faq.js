import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
export default function faq() {
  return (
    <>
      <section className="fullbg">
        <MDBContainer className="header">
          <MDBRow className="d-flex flex-row align-items-center justify-content-center">
            <MDBCol md={6} lg={6} sm={12} className="faq-head ">
              <h1 className="">FAQ</h1>
              <h5>
                For<span> Content creators</span>
              </h5>
            </MDBCol>
            <MDBCol md={6} lg={6} sm={12} className="que-ans">
              {" "}
              <MDBRow className="right-sec py-4 px-3 my-4 ">
                <MDBCol md={12} lg={12} sm={6}>
                  <h3>What is the LOF platform for?</h3>
                  <p className="pr">
                    LOF Platform is a revolutionary fan platform that allows all
                    types of content creators to publish content in many
                    different forms (images, videos, live streams, music and
                    NFT's). Creators can freely choose the fee for users to view
                    their content. The platform will charge a minimal share of
                    the earnings, up to 15% and as little as 5%. <br />
                    <br /> For customers, the LOF Platform is a place where they
                    can view and purchase content from the most interesting
                    content creators around the world at the most competitive
                    prices. Anonymously if they choose to, depending on the
                    payment format they choose!
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="right-sec py-4 px-3 my-4">
                <MDBCol md={12} lg={12} sm={6}>
                  <h3>How long does it take to become a creator?</h3>
                  <p>
                    Becoming a creator is a very easy and fast process. It does
                    not require any prior knowledge or skill! You just need to
                    fill in a few details and be verified by the platform
                    moderators before you can start releasing your content.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="right-sec py-4 px-3 my-4">
                <MDBCol md={12} lg={12} sm={6}>
                  <h3>How much money will I earn with LOF?</h3>
                  <p>
                    The amount you earn is determined by your ability to grow a
                    fan base, the amount of content you sell and the price you
                    choose to sell it for. In full transparency, we cannot
                    promise a minimum income. What we can promise however, is
                    all the tools you need to be successful, connecting you with
                    a great amount of potential new fans from our userbase and
                    answer all your questions. We have a healthy community of
                    content creators and an open atmosphere to cross promote and
                    network with. <br />
                    <br /> By accepting our LOF cryptocurrency token as part of
                    your payments, there is the potential for an exponential
                    gain in value due to the ecosystems impact on the supply, as
                    well as passive income generation. By holding LOF
                    cryptocurrency tokens in your possession, you will
                    automatically receive passive income sent to your wallet!
                    Don’t worry, if this sounds confusing, we have videos to
                    better explain it in our education center!
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="right-sec py-4 px-3 my-3">
                <MDBCol md={12} lg={12} sm={6}>
                  <h3>Who can create on the LOF platform?</h3>
                  <p>
                    Everyone! All kinds of content creators are welcome and free
                    to release content. The content must follow legal
                    restrictions, but besides that LOF is 100% free of
                    judgement.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="right-sec py-4 px-3 my-3">
                <MDBCol md={12} lg={12} sm={6}>
                  <h3>What methods are used for payments?</h3>
                  <p>
                    Users can pay using a credit card or a crypto wallet.
                    Acceptable cryptocurrencies are BUSD, BNB and of course our
                    native LOF Token. Users who would like to privately purchase
                    content will prefer to use cryptocurrency. If you’re not
                    familiar with cryptocurrency or the process of using it, we
                    have how-to videos in our education center!
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="right-sec py-4 px-3 my-3">
                <MDBCol md={12} lg={12} sm={6}>
                  <h3>How frequent are payouts to content creators?</h3>
                  <p>
                    Payouts will take place once per month for credit/debit card
                    purchases. Crypto payments are practically instant and are
                    not subject to chargebacks! If you’re not familiar with
                    cryptocurrency or the process of using it, we have how-to
                    videos in our Education Center!
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
