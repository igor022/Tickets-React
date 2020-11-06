import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './styles/index.scss';
import UsersTable from './components/UsersTable/UsersTable';
import TicketCard from './components/TicketCard/TicketCard';
import { Ticket } from './types/types';

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | undefined>(undefined);

  useEffect(() => {
    async function loadTickets() {
      const { data } = await axios.get('https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json');
      setTickets(data);
    }
    loadTickets();
  }, [])

  useEffect(() => {
    if (tickets.length > 0) {
      setSelectedTicket(tickets[1]);
    }
  }, [tickets])

  return (
    <div className="p-4 bg-gray-800 text-gray-400 text-sm">
      <div>
        <h2 className="red text-2xl">Tickets</h2>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-3">
        <div className="col-span-1">
          <div className="bg-gray-300">
            <input type="text" />
            <svg className=" w-6 h-6 relative bottom-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <UsersTable tickets={tickets}/>      
        </div>
        <div className="col-span-3 bg-gray-700">
          <TicketCard ticket={selectedTicket}/>
        </div>
      </div>
    </div>
  );
}

export default App;
