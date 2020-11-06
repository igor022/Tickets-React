import React from 'react'
import { Ticket } from '../../types/types';
import TicketImage from '../TicketImage/TicketImage';
import { convertDate } from '../../utils/utils';

interface Props {
  ticket: Ticket | undefined
}

const TicketCard: React.FC<Props> = (props) => {
  const { ticket } = props;

  return ticket 
    ? (
      <div className="px-4">
        <div className="flex justify-between my-3">
          <p className="text-gray-600">TICKET NO. <span className="text-gray-500">{ticket.number}</span></p>
          <p className="text-gray-600">LAST UPDATED <span>{convertDate(ticket.lastUpdatedTime)}</span></p>
        </div>
  
        <div className="border-2 border-gray-800 rounded-t overflow-hidden">
          <div className="bg-gray-800 px-2 py-1 font-bold">
            <h6>Owner</h6>
          </div>
          <div className="flex items-center p-4">
            <TicketImage imageUrl={ticket.owner.avatar} size="lg"/>
            <div className="ml-3">
              <p>{ticket.owner.firstName} {ticket.owner.lastName}</p>
              <p className="uppercase text-xs">{ticket.owner.specialities.map((s) => `${s};`)}</p>
            </div>
          </div>
        </div>
  
        <div className="border-2 border-gray-800 rounded-t overflow-hidden mt-4">
          <div className="bg-gray-800 px-2 py-1 font-bold">
            <h6>Details</h6>
          </div>
          <div className="p-5">
            <div className="">
              <p className="text-gray-600">Reported</p>
              <p className="">{ticket.reportedTime}</p>
            </div>
            <div className="my-5">
              <p className="text-gray-600">Status</p>
              <p className="">{ticket.status}</p>
            </div>
            <div className="">
              <p className="text-gray-600">Description</p>
              <p className="">{ticket.description}</p>
            </div>
          </div>
        </div>
  
        <div className="border-2 border-gray-800 rounded-t overflow-hidden mt-4">
          <div className="bg-gray-800 px-2 py-1 font-bold">
            <h6>Asset</h6>
          </div>
          <div className="p-5">
            <div className="">
              <p className="text-gray-600">Name</p>
              <p className="">{ticket.asset.name}</p>
            </div>
            <div className="my-5">
              <p className="text-gray-600">GeoCode</p>
              <p className="">{ticket.asset.geoCode}</p>
            </div>
            <div className="">
              <p className="text-gray-600">Location</p>
              <p className="">{ticket.asset.kmFrom} {ticket.asset.kmTo}</p>
            </div>
          </div>
        </div>
      </div>
    ) 
  : (
    <div className="h-screen flex flex-col items-center justify-center">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      <p className="">No ticket selected</p>
    </div>
  )
}

export default TicketCard
