import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

import { Ticket } from '../types/types';

import TicketImage from './TicketImage';
import Location from './Location';
import Status from './Status';
import Map from './Map';

import { convertDate } from '../utils/utils';

interface Props {
  ticket: Ticket
}

const TicketCard: React.FC<Props> = (props) => {
  const { ticket } = props;
  const { id } = useParams() as any;

  const [tickets, setTickets] = useState<Ticket[]>([]);


  return ticket ? (
      <div className="px-4">
        <div className="flex justify-between my-3">
          <p className="text-primary-500">TICKET NO. <span className="text-primary-500">{ticket.number}</span></p>
          <p className="text-primary-500">LAST UPDATED <span>{convertDate(ticket.lastUpdatedTime)}</span></p>
        </div>
  
        <div className="border-2 border-primary-200 rounded-t overflow-hidden">
          <div className="bg-primary-200 px-2 py-1 font-bold">
            <h6>Owner</h6>
          </div>
          <div className="flex items-center p-4">
            <TicketImage imageUrl={ticket.owner.avatar} size="lg"/>
            <div className="ml-3">
              <p>{ticket.owner.firstName} {ticket.owner.lastName}</p>
              <p className="uppercase text-xs">{ticket.owner.specialities.join(' ')}</p>
            </div>
          </div>
        </div>
  
        <div className="border-2 border-primary-200 rounded-t overflow-hidden mt-4">
          <div className="bg-primary-200 px-2 py-1 font-bold">
            <h6>Details</h6>
          </div>
          <div className="p-5">
            <div className="">
              <p className="text-primary-500">Reported</p>
              <p className="">{convertDate(ticket.reportedTime)}</p>
            </div>
            <div className="my-5">
              <p className="text-primary-500">Status</p>
              <Status status={ticket.status} />
            </div>
            <div className="">
              <p className="text-primary-500">Description</p>
              <p className="">{ticket.description}</p>
            </div>
          </div>
        </div>
  
        <div className="border-2 border-primary-200 rounded-t overflow-hidden my-4">
          <div className="bg-primary-200 px-2 py-1 font-bold">
            <h6>Asset</h6>
          </div>
          <div className="p-5">
            <div className="">
              <p className="text-primary-500">Name</p>
              <p className="">{ticket.asset.name}</p>
            </div>
            <div className="my-5">
              <p className="text-primary-500">GeoCode</p>
              <p className="">{ticket.asset.geoCode}</p>
            </div>
            <div className="">
              <p className="text-primary-500">Location</p>
              <div className="flex">
                <Location coord={ticket.asset.kmFrom} />
                <Location coord={ticket.asset.kmTo} />
              </div>
            </div>
          </div>
        </div>      
      </div>
    ) : null
}

export default TicketCard
