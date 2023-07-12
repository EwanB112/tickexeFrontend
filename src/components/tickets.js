import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';

function Tickets() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      name: 'TP Friday',
      date: '01/12/2023',
      location: 'TP',
      price: 1,
      club: 'timepiece'
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

    fetchTickets();
  }, []);

  const getBorderColor = (club) => {
    switch (club) {
      case 'timepiece':
        return 'white';
      case 'fever':
        return 'orange';
      default:
        return 'black';
    }
  };

  const addNewTicket = () => {
    const newTicket = {
      id: 2,
      name: 'Fever Thursday',
      date: '02/12/2023',
      location: 'Fever',
      price: 1,
      club: 'fever'
    };
    setTickets([...tickets, newTicket]);
  }

  // Render the tickets
  return (
    <div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {tickets.map(ticket => (
          <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '3vh' }} key={ticket.id}>
            <div className='card-ticket'>
              <div className='bulge'>
                <img className='qr' src='https://organiser-legacy.fixr.co/api/v2/app/ticket-reference/X88VuHdSTThv8bWDttHPv9/dff5bf9ffa/svg' />
              </div>
              <div  style={{marginTop: '4vh', marginLeft: '2vh'}}>
                <h2>{ticket.name}</h2>
                <p>Date: {ticket.date}</p>
                <p>Location: {ticket.location}</p>
                <p>Price: £{ticket.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={addNewTicket}>Add New Ticket</button>
    </div>
  );
}

export default Tickets;