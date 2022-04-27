import React, { useState } from "react";
import { SectionsContainer, Section, Header, Footer } from "react-fullpage";
import "react-fullpage/example/demo.css";
import Hero from "../components/Hero";
import Platform from "../components/Platform";
import BcomeCreator from "../components/BcomeCreator";
import WhyLof from "../components/Whylof";
import Faq from "../components/Faq";
import Navigation from '../components/Navigation'
import Bottomnav from "../components/Bottomnav";

export default function Home() {
  let options = {
    sectionClassName: "section",
    anchors: [
      "home",
      "platform",
      "becomeCreator",
      "whylof",
      "faq",
    ],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: "50px",
    sectionPaddingBottom: "50px",
    arrowNavigation: true,
  };
  const [showNav, setShowNav] = useState(false);
  return (
    <>
    {/* *******************Haeder Start***********  */}
      <Header>
      <Navigation/>

      </Header>
      {/* *******************Header End ***********  */}
      {/* *******************Footer Start***********  */}
      <Footer>
        <Bottomnav/>
      </Footer>
      {/* *******************8Footer End***********  */}
      <SectionsContainer {...options}>
        <Section>
          <Hero />
        </Section>
        <Section>
          <Platform />
        </Section>
        <Section>
          <BcomeCreator />
        </Section>
        <Section>
          <WhyLof />
        </Section>
        <Section>
          <Faq />
        </Section>
      </SectionsContainer>
    </>
  );
}
