import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';
import '../styles/displayTicket.css';
import Footer from '../components/footer';
import HowItWorks from '../components/howItWorks';

function Home() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Anton']
            }
        });
        const fetchTickets = async () => {

        };

        fetchTickets();
    }, []);
    return (
        <div className='bg-black page-wrapper'>
            <div className='d-flex justify-content-center align-items-center'>
                <h1 style={{ fontFamily: 'Anton', color: "#fff", marginTop: '6vh', fontSize: '8vh' }} >Tickexe</h1>
            </div>

            <h3 className='d-flex justify-content-center align-items-center' style={{ marginTop: '2vh', color: 'white', textAlign: 'center', fontFamily: 'Anton', fontSize: '3vh' }}>Buy and sell aftermarket tickets in Exeter</h3>

            <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '3vh' }}>
                <div className='card-ticket'>
                    <div className='bulge'>
                        <img className='qr' src='https://organiser-legacy.fixr.co/api/v2/app/ticket-reference/X88VuHdSTThv8bWDttHPv9/dff5bf9ffa/svg' />
                    </div>
                    <div className='column' style={{ marginTop: '4vh', marginLeft: '4vh' }}>
                        <h2 className='row mb-4'>Timepiece Friday</h2>
                        <h5 className='row mb-3'>10/10/23</h5>
                        <h5 className='row mb-3'> 9:30 - 10: 00</h5>
                        <h5 className='row mb-3'>Timepiece Exeter</h5>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '5vh' }}>
                <Link to="/my-tickets" style={{ textDecoration: 'none', color: 'white', textAlign: 'center', fontFamily: 'Anton', fontSize: '3vh' }}>Go to Events</Link>
            </div>

            <HowItWorks className='animated-background'/>
            <Footer />
        </div>
    );
}

export default Home;