import React, { useEffect, useRef } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/howItWorks.css'

function HowItWorks() {
    const leftElementRef = useRef(null);
    const rightElementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-on-scroll");
            } else {
              entry.target.classList.remove("animate-on-scroll");
            }
          });
        });
    
        if (leftElementRef.current) {
          observer.observe(leftElementRef.current);
        }
        if (rightElementRef.current) {
          observer.observe(rightElementRef.current);
        }
    
        return () => {
          if (leftElementRef.current) {
            observer.unobserve(leftElementRef.current);
          }
          if (rightElementRef.current) {
            observer.unobserve(rightElementRef.current);
          }
        };
      }, []);

    return (
        <div className="how-it-works" style={{ marginTop: '20vh' }}>

                <div className='d-flex justify-content-center align-items-center container' style={{ color: 'white', }}>
                    <div className='row'  style={{marginTop: '15vh', marginBottom: '15vh'}}>
                        <div className='col text-center howItWorks' style={{ marginRight: '10vh' }} ref={leftElementRef}>
                            <div className="how-it-works-heading">
                                <h2 style={{ fontFamily: 'Anton', color: 'white' }}>How It Works</h2>
                            </div>
                            <div className='row'>
                                <div className='col '>
                                    <i className="bi bi-search how-it-works-icon"></i>
                                    <h3 className="how-it-works-title">Discover Events</h3>
                                    <p className="how-it-works-description">
                                        Explore a variety of student night events in Exeter tailored to your interests and preferences. Our platform makes it easy to find and filter events based on your desired criteria.
                                    </p>
                                </div>
                                <div className='col text-center'>
                                    <i className="bi bi-cart4 how-it-works-icon"></i>
                                    <h3 className="how-it-works-title">Bid on Tickets</h3>
                                    <p className="how-it-works-description">
                                        Place bids on the tickets for the events you want to attend. Our auction-based system promotes fair pricing, ensuring that everyone has an equal opportunity to secure tickets at a reasonable price.
                                    </p>
                                </div>
                                <div className='col text-center'>
                                    <i className="bi bi-calendar-check how-it-works-icon"></i>
                                    <h3 className="how-it-works-title">Enjoy the Event</h3>
                                    <p className="how-it-works-description">
                                        Once you've won a bid, secure your tickets through our safe and secure payment system. Then, get ready to have a fantastic time at the event, knowing that your tickets are authentic and verified.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" col d-none d-lg">
                            <div className="divider"></div>
                        </div>
                        <div className='col text-center ourGuarentee' style={{ marginRight: '10vh' }} ref={rightElementRef}>
                            <div className="how-it-works-heading">
                                <h2 style={{ fontFamily: 'Anton', color: 'white' }}>Our Guarantee</h2>
                            </div>
                            <div className="security-item" style={{marginTop: '12vh'}}>
                                <i className="bi bi-patch-check-fill"></i> Student Verification
                                <p className="security-description">
                                    We verify the student status of all users to ensure a safe and exclusive marketplace.
                                </p>
                            </div>
                            <div className="security-item">
                                <i className="bi bi-patch-check-fill"></i> Escrow System
                                <p className="security-description">
                                    Funds are securely held in escrow until both parties are satisfied, promoting fair transactions.
                                </p>
                            </div>
                            <div className="security-item">
                                <i className="bi bi-patch-check-fill"></i> Ticket Authenticity
                                <p className="security-description">
                                    Our platform verifies the authenticity of every ticket, so you can trust that you're getting the real deal.
                                </p>
                            </div>
                            <div className="security-item">
                                <i className="bi bi-patch-check-fill"></i> Secure Payment
                                <p className="security-description">
                                    We use industry-standard security measures to protect your sensitive information during payment processing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default HowItWorks;