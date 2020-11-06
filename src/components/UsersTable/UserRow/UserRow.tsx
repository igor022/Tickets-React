import React from 'react'
import { Ticket } from '../../../types/types';
import TicketImage from '../../TicketImage/TicketImage';
import { convertDate } from '../../../utils/utils';

interface Props {
  ticket: Ticket
}

const UserRow: React.FC<Props> = (props) => {
  const { ticket } = props;
  return (
    <tr className="border-l-2">
      <td><TicketImage imageUrl={ticket.owner.avatar}/></td>  
      <td>{convertDate(ticket.reportedTime)}</td>
      <td>{ticket.asset.name}</td>
      <td className="text-right">{ticket.status}</td>
    </tr>
  )
}

export default UserRow
