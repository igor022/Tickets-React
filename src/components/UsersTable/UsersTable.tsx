import React from 'react'
import UserRow from './UserRow/UserRow';
import { Ticket } from '../../types/types';

interface Props {
  tickets: Ticket[]
}

const UsersTable: React.FC<Props> = (props) => {
  const { tickets } = props;

  return (
    <div className="p-4 bg-gray-700">
      <table className="w-full">
        <thead className="text-gray-600">
          <th className="text-left">Owner</th>
          <th className="text-left">Reported</th>
          <th className="text-left w-1/4">Asset</th>
          <th className="text-right w-1/4">Status</th>
        </thead>
        <tbody className="">
        {
          tickets.map((ticket) => (
            <UserRow ticket={ticket} />
          ))
        } 
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable
