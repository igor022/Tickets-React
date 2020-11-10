import React from "react";
import { Ticket } from "../types/types";
import TicketImage from "./TicketImage";
import Status from "./Status";
import TableGap from "./TableGap";
import { Link, withRouter } from "react-router-dom";
import { convertDate } from "../utils/utils";
import cx from "classnames";

interface Props {
  ticket: Ticket;
  selected?: boolean;
  selectTicket: (id: number) => void;
}

const UserRow: React.FC<Props> = (props) => {
  const { ticket, selected } = props;

  const cxRow = cx(
    "border-l-4 border-primary-300 px-4 hover:bg-primary-400 hover:border-primary-400 cursor-pointer",
    {
      "border-l-4 border-secondary-violet hover:border-secondary-violet bg-primary-400": selected,
    }
  );

  return (
    <>
      <Link to={`/ticket/${ticket.ticketId}`}>
        <div
          className={cxRow}
          onClick={() => props.selectTicket(ticket.ticketId)}
        >
          <div className="flex align-middle h-12 w-full items-center ">
            <div className="w-12 pr-1">
              <TicketImage imageUrl={ticket.owner.avatar} />
            </div>
            <div className="flex-1 px-1">
              {convertDate(ticket.reportedTime)}
            </div>
            <div className="flex-1 px-1">{ticket.asset.name}</div>
            <div className="flex-1 pl-1 text-right">
              <Status status={ticket.status} />
            </div>
          </div>
        </div>
      </Link>
      <TableGap />
    </>
  );
};

export default UserRow;
