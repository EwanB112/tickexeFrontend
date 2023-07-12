import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function BuyScreen() {
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
                        <Link to="/buy" className="nav-link active" style={{ fontFamily: 'Anton', fontSize: '24px', color: '#A6E5B8' }}>
                            Buy
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/my-tickets" className="nav-link active" style={{ fontFamily: 'Anton', fontSize: '24px', color: 'white' }}>
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
            <div className="container-fluid px-0">
                <div className="row" style={{ height: '60px' }}>
                    <div className="col-6 border border-white bg-black text-white d-flex align-items-center justify-content-center">
                        <span style={{ fontFamily: 'Anton', fontSize: '24px' }}>Venue</span>
                    </div>
                    <div className="col-6 border border-white bg-black text-white d-flex align-items-center justify-content-center">
                        <span style={{ fontFamily: 'Anton', fontSize: '24px' }}>Date</span>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default BuyScreen;

