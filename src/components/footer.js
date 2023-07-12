import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';

function Footer() {
  useEffect(() => {
    WebFont.load({
        google: {
            families: ['Anton']
        }
    });

}, []);

  return (
    <footer className="bg-black text-white" style={{marginTop: '50vh'}}>
      <div className='d-flex justify-content-center align-items-center container' style={{fontFamily: 'Anton'}}>
        <div className='row'>
          <div className='col text-center'>
            <h5>Contact Us</h5>
            <p>Email: support@studentticketmarketplace.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Student Ticket Marketplace. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;