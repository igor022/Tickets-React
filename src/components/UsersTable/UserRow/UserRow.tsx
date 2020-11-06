import React from 'react'
import { Ticket } from '../../../types/types';
import TicketImage from '../../TicketImage/TicketImage';
import { convertDate } from '../../../utils/utils';
import cx from "classnames";

interface Props {
  ticket: Ticket
  selected?: boolean
  selectTicket: (id: number) => void
}

const UserRow: React.FC<Props> = (props) => {
  const { ticket, selected } = props;

  const cxRow = cx('px-4 hover:bg-gray-600 cursor-pointer', {
    'border-l-4 border-purple-700 bg-gray-600': selected
  })

  return (
    <>
      <div className={cxRow} onClick={() => props.selectTicket(ticket.ticketId)}>
        <div className="flex align-middle h-12 w-full  items-center">
          <div className="w-12 pr-1"><TicketImage imageUrl={ticket.owner.avatar}/></div>  
          <div className="flex-1 px-1">{convertDate(ticket.reportedTime)}</div>
          <div className="flex-1 px-1">{ticket.asset.name}</div>
          <div className="flex-1 pl-1 text-right">{ticket.status}</div>
        </div>
      </div>
      <div className="px-4">
        <div className="w-full  border-gray-800 border-b-2"></div>
      </div>
    </>
  )
}

export default UserRow
