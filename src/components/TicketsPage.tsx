import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

import { getTickets } from "../api/ticketsApi";

import UsersTable from "./UsersTable";
import TicketCard from "./TicketCard";
import Search from "./Search";

import { Ticket } from "../types/types";
import { TypePredicateKind } from "typescript";

interface Props {}

const TicketsPage = (props: Props) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [id, setId] = useState<number | undefined>(undefined);
  const [searchField, setSearchField] = useState<string>("");

  const selectedTicket = useMemo(() => tickets.find((t) => t.ticketId == id), [
    tickets,
    id,
  ]);

  const searchTickets = useMemo(
    () =>
      tickets.filter((t) =>
        `${t.owner.firstName} ${t.owner.lastName}`
          .toLowerCase()
          .includes(searchField.toLowerCase())
      ),
    [searchField, tickets]
  );

  const handleSearch = (e: any) => {
    setSearchField(e.target.value);
  };

  const selectTicket = (id: number): void => {
    setId(id);
  };

  useEffect(() => {
    async function loadTickets() {
      const { data } = await axios.get(
        "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"
      );
      setTickets(data);
    }
    loadTickets();
  }, []);

  useEffect(() => {}, [id, tickets]);

  return (
    <div className="flex mt-3">
      <div className="col-span-1">
        <Search handleSearch={handleSearch} />
        <UsersTable
          tickets={searchTickets}
          selectTicket={selectTicket}
          selected={selectedTicket?.ticketId}
        />
      </div>
      <div className="ml-5 w-full bg-primary-300">
        <Switch>
          <Route path={`/ticket/:id`}>
            <TicketCard selectTicket={selectTicket} />
          </Route>
          <Route path="/ticket">
            <div className="h-full flex flex-col items-center justify-center">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              <p className="">No ticket selected</p>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default TicketsPage;
