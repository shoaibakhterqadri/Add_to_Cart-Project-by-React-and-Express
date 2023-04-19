import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-or-registration-to-e-payment-application-3159825-2631917.png" className='home-banner' alt="" />
  <div className="featured-products-container container mt-4">
      <h2>Last products</h2>
    {/* last products here */}
     <div>
<Link to="/category/all" style={{textAlign:'right', display:"block",textDecoration:"none"}}>See more {">>"}</Link>
     </div>
  </div>
    {/* sale banner */}
    <div className="sale_banner--container mt-4">
      <img src="" alt="" />
    </div>
    <div className='recent-products-container container mt-4'>
    <h2>Categories</h2>
    <Row>
      
    </Row>
    </div>


    </>
  )
}

export default Home
