import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/events.css';
import Footer from '../components/footer';

function BuyScreen() {
    const [events, setEvents] = useState([
        {
            id: 1,
            name: 'Fever Monday',
            date: '29/05/2023',
            location: 'Fever',
            price: 5,
            club: 'Fever'
        }
    ]);

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Anton']
            }
        });

        const fetchTickets = async () => {

        };

    }, []);

    const addNewEvent = () => {
        const newEvent = {
            id: 2,
            name: 'Fever Monday',
            date: '29/05/2023',
            location: 'Fever',
            price: 5,
            club: 'Fever'
        };
        setEvents([...events, newEvent]);
    }
    return (
        <div className='page-wrapper'>
            <div className="bg-black d-flex align-items-center justify-content-center">
                <div className="text-center custom-margin">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to="/buy" className="nav-link active" style={{ fontFamily: 'Anton', fontSize: '24px', textDecoration: 'underline', color: 'white' }}>
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
            <div className="d-flex flex-row flex-wrap justify-content-center">
                {events.map(event => (
                    <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '8vh' }} key={event.id}>
                        <div className='event'>
                            <img className='image' src='https://fixr-cdn.fixr.co/images/event/2023-05/3aba7f3f055c4d1c8202926a7984a3b9.jpeg' />
                            <div className='d-flex justify-content-between border-top title'>
                                <h4 style={{ fontFamily: 'Anton', marginLeft: '1vh', display:'inline-block',marginTop: '1vh' }}>Fever Monday, End of Exams</h4>
                                <h4 style={{ fontFamily: 'Anton', marginRight: '1vh', display:'inline-block', marginTop: '1vh', color: '#2bd483'}}>£5</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={addNewEvent}>Add New Ticket</button>

            <Footer />
        </div>


    );
}

export default BuyScreen;

