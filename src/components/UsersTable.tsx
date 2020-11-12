import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import UserRow from "./UserRow";
import { Ticket } from "../types/types";

interface Props {
  tickets: Ticket[];
  selected: number | undefined;
  selectTicket: (id: number) => void;
}

const UsersTable: React.FC<Props> = (props) => {
  const { tickets } = props;

  return (
    <div className="pb-4 bg-primary-300 userTable overflow-y-scroll">
      <div className="userRow flex p-4 text-primary-500 border-b border-primary-100 ">
        <div className="w-12 pr-1 text-left">Owner</div>
        <div className="flex-1 px-1 text-left">Reported</div>
        <div className="flex-1 px-1 text-left w-1/4">Asset</div>
        <div className="flex-1 pl-1 text-right w-1/4">Status</div>
      </div>
      <div className="userRow flex flex-col w-full ">
        {tickets.map((ticket) => (
          <NavLink to={`/ticket/${ticket.ticketId}`} key={ticket.ticketId}>
            <UserRow
              ticket={ticket}
              selectTicket={props.selectTicket}
              selected={ticket.ticketId === props.selected}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default UsersTable;
