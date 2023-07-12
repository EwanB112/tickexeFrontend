import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import '../styles/displayTicket.css';
import BuyScreen from './buyScreen'; // Import BuyScreen component
import Tickets from '../components/tickets';
import Footer from '../components/footer';

function Events() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Anton']
            }
        });
    }, []);

    return (
        <div className='page-wrapper'>
            <div className="bg-black d-flex align-items-center justify-content-center">
                <div className="text-center custom-margin">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to="/buy" className="nav-link active" style={{ fontFamily: 'Anton', fontSize: '24px', color: 'white' }}>
                                Buy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/my-tickets" className="nav-link active" style={{ fontFamily: 'Anton', fontSize: '24px', textDecoration: 'underline', color: 'white'}}>
                                My Tickets
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sell" className="nav-link active" style={{ fontFamily: 'Anton', fontSize: '24px', color: 'white' }}>
                                Sell
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Tickets />

            <Footer />
        </div >
    );
}
export default Events;