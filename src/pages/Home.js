import React from 'react';
import Navigation from '../components/Navigation';
import Bottomnav from '../components/Bottomnav';
import Hero from "../components/Hero";
import Platform from "../components/Platform";
import BcomeCreator from "../components/BcomeCreator";
import WhyLof from "../components/Whylof";
import Faq from "../components/Faq";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

class Home2 extends React.Component {
    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
      }
      afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
      }
      render() {
        return (
          <ReactFullpage
            licenseKey={"YOUR_LICENSE_KEY"}
            scrollOverflow={true}
            sectionsColor={["orange", "purple", "green"]}
            onLeave={this.onLeave.bind(this)}
            afterLoad={this.afterLoad.bind(this)}
            render={({ state, fullpageApi }) => {
              return (
                  <>
                  
                  
                <div id="fullpage-wrapper">
                <Navigation/>
                  <div className="section section1" id='home'>
                    <Hero/>
                  </div>
                  <div className="section" id='Platform'>
                    <Platform/>
                  </div>
                  <div className="section" id='becomeCreator'>
                    <BcomeCreator/>
                  </div>
                  <div className="section">
                    <WhyLof/>
                  </div>
                  <div className="section" id='faq'>
                    <Faq/>
                  </div>
                  <Bottomnav/>
                </div>
                
                </>
              );
            }}
          />
        );
      }
    }
    
 
export default Home2;