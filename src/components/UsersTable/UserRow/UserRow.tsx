import React from 'react'
import { Ticket } from '../../../types/types';
import TicketImage from '../../TicketImage/TicketImage';
import { convertDate } from '../../../utils/utils';
import cx from "classnames";

interface Props {
  ticket: Ticket,
  selected?: boolean
}

const UserRow: React.FC<Props> = (props) => {
  const { ticket, selected } = props;

  const cxRow = cx('h-12 w-full border-gray-800 border-b-2 hover:bg-gray-600 cursor-pointer', {
    'border-purple-600': selected
  })

  return (
      <tr className={cxRow}>
        <td><TicketImage imageUrl={ticket.owner.avatar}/></td>  
        <td>{convertDate(ticket.reportedTime)}</td>
        <td>{ticket.asset.name}</td>
        <td className="text-right">{ticket.status}</td>
      </tr>
  )
}

export default UserRow
