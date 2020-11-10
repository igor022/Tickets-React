import React, { useState } from 'react'
import UserRow from './UserRow';
import TableGap from './TableGap';
import { Ticket } from '../types/types';

interface Props {
  tickets: Ticket[]
  selected: number | undefined
  selectTicket: (id: number) => void
}

const UsersTable: React.FC<Props> = (props) => {
  const { tickets } = props;

  return (
    <div className="pb-4 bg-primary-300 userTable overflow-y-scroll">
      <div className="flex p-4 text-primary-500">
        <div className="w-12 pr-1 text-left">Owner</div>
        <div className="flex-1 px-1 text-left">Reported</div>
        <div className="flex-1 px-1 text-left w-1/4">Asset</div>
        <div className="flex-1 pl-1 text-right w-1/4">Status</div>
      </div>
      <TableGap />
      <div className="flex flex-col w-full ">
      {
        tickets.map((ticket) => (
          <UserRow key={ticket.ticketId} ticket={ticket} selectTicket={props.selectTicket} selected={ticket.ticketId === props.selected}/>
        ))
      } 
      </div>
    </div>
  )
}

export default UsersTable
