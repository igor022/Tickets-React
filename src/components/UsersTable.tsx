import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";

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
      <UserTableHeader />
      <div className="userRow flex flex-col w-full ">
        {tickets.map((ticket) => (
          <NavLink to={`/ticket/${ticket.ticketId}`} key={ticket.ticketId}>
            <UserTableRow
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
