import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react';
import money from '../assets/icons/money.png';
import love from '../assets/icons/love.png';
import follower from '../assets/icons/followers.png';
import cli from '../assets/icons/clin.png';

export default function WhyLof() {
  return (
<>
<section className='WhyLof-bg'>
    <MDBContainer>
        <MDBRow className='pt-5'>
            <MDBCol md={12} sm={12} lg={12} className='WhyLof-head text-center py-3 pt-5 p-5'>
        <h1>Why LOF?</h1>
            </MDBCol>
        </MDBRow>
        <MDBRow className='pt-md-5'>
            <MDBCol md={6} lg={6} sm={12} className=' mb-md-5  feature-bg' >
               <MDBRow >
                   <div className='d-flex '>
                   <MDBCol md={2} lg={2} sm={2} className='lof-feature py-3 ms-2'>
                    <img src={money} className='img-fluid ' alt="" />
                   </MDBCol>
                   <MDBCol md={6} lg={6} sm={6} className='lof-feature pt-3 my-auto'>
                    <p>More Profit</p>
                   </MDBCol>
                   </div>
                   {/* <MDBCol md={6} ></MDBCol> */}
                   
                   <MDBCol md={12} sm={12} lg={12} className='feature-txt ms-2' >
                       <p>You will keep up to 95% of all your sales! In addition to that, you can release  your content as NFT's, and get a share of the  price every single time the NFT  is resold - forever.
                        </p>
                   </MDBCol>
               </MDBRow>
            </MDBCol>
            <MDBCol md={6} lg={6} sm={12} className='mb-md-5 feature-bg1'>
               <MDBRow>
            <div  className='d-flex '>
                   <MDBCol md={2} lg={2} sm={2} className='lof-feature py-3 ms-2'>
                    <img src={love} className='img-fluid' alt="" />
                   </MDBCol>
                   <MDBCol md={9} lg={9} sm={9} className='lof-feature pt-3 my-auto'>
                    <p>More Features</p>
                   </MDBCol>
                   </div>
                   <MDBCol md={12} sm={12} lg={12} className='feature-txt ms-2' >
                       <p>We looked at other fan platforms and what they were  missing. We worked  with content creators and asked what  could be done better. Turns out there  were plenty, and our  platform has been built to fix that.
                        </p>
                   </MDBCol>
               </MDBRow>
            </MDBCol>
            <MDBCol md={6} lg={6} sm={12} className='feature-bg'>
               <MDBRow>
                   <div  className='d-flex '>
                   <MDBCol md={2} lg={2} sm={2} className='lof-feature py-3 ms-2'>
                    <img src={follower} className='img-fluid' alt="" />
                   </MDBCol>
                   <MDBCol md={9} lg={9} sm={9} className='lof-feature pt-3 my-auto'>
                    <p>Effortless Payments in Time</p>
                   </MDBCol>
                   </div>
                   <MDBCol md={12} sm={12} lg={12} className='feature-txt ms-2' >
                        <p>We are aware of the problems the other fan platforms have  had. On LOF,  your payments will always be in time without  any extra hassle.
                        </p>
                   </MDBCol>
               </MDBRow>
            </MDBCol>
            <MDBCol md={6} lg={6} sm={12} className='feature-bg1'>
               <MDBRow>
                   <div  className='d-flex '>
                   <MDBCol md={2} lg={2} sm={2} className='lof-feature py-3 ms-2'>
                    <img src={cli} className='img-fluid' alt="" />
                   </MDBCol>
                   <MDBCol md={9} lg={9} sm={9} className='lof-feature pt-3 my-auto'>
                    <p>More Freedom</p>
                   </MDBCol>
                   </div>
                   <MDBCol md={12} sm={12} lg={12} className='feature-txt ms-2' >
                        <p>We will not restrict your content in anyway - as long as it  obeys the law. Your content  can be just as mild or just as  kinky as you want. There will be no surprise account closings  or changes in terms of use. We are on your side, and we  want you to be happy.
                        </p>
                   </MDBCol>
               </MDBRow>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</section>
</>
    )
}