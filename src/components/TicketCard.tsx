import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Ticket } from "../types/types";
import { getTicketById, getTickets } from "../api/ticketsApi";

import TicketImage from "./TicketImage";
import Location from "./Location";
import Status from "./Status";
import Map from "./Map";
import TicketCardSection from "./TicketCardSection";

import { convertDate } from "../utils/utils";

interface Props {
  selectTicket: (id: number) => void;
}

const TicketCard: React.FC<Props> = (props) => {
  const { id } = useParams() as any;
  const [ticket, setTicket] = useState<Ticket | undefined>(undefined);

  useEffect(() => {
    (async function () {
      const data: Ticket = await getTicketById(+id);

      setTicket(data);
      if (data) {
        props.selectTicket(data.ticketId);
      }
    })();
  }, [id]);

  return ticket ? (
    <div className="px-4">
      <div className="flex justify-between my-3">
        <p className="text-primary-500">
          TICKET NO. <span className="text-primary-500">{ticket.number}</span>
        </p>
        <p className="text-primary-500">
          LAST UPDATED <span>{convertDate(ticket.lastUpdatedTime)}</span>
        </p>
      </div>

      {ticket.owner ? (
        <TicketCardSection header="Owner">
          <div className="flex items-center">
            <TicketImage imageUrl={ticket.owner.avatar} size="lg" />
            <div className="ml-3">
              <p>
                {ticket.owner.firstName} {ticket.owner.lastName}
              </p>
              <p className="uppercase text-xs">
                {ticket.owner.specialities.map((s) => s.name).join(" ")}
              </p>
            </div>
          </div>
        </TicketCardSection>
      ) : null}

      <div className="py-2"></div>
      <TicketCardSection header="Details">
        <div className="">
          <div className="">
            <p className="text-primary-500">Reported</p>
            <p className="">{convertDate(ticket.reportedTime)}</p>
          </div>
          <div className="my-5">
            <p className="text-primary-500">Status</p>
            <Status status={ticket.status} />
          </div>
          <div className="">
            <p className="text-primary-500">Description</p>
            <p className="">{ticket.description}</p>
          </div>
        </div>
      </TicketCardSection>
      <div className="py-2"></div>

      {ticket.asset ? (
        <>
          <TicketCardSection header="Asset">
            <div>
              <p className="text-primary-500">Name</p>
              <p className="">{ticket.asset.name}</p>
            </div>
            <div className="my-5">
              <p className="text-primary-500">GeoCode</p>
              <p className="">{ticket.asset.geoCode}</p>
            </div>
            <div>
              <p className="text-primary-500">Location</p>
              <div className="flex">
                <Location coord={ticket.asset.kmFrom} />
                <Location coord={ticket.asset.kmTo} />
              </div>
            </div>
          </TicketCardSection>

          <div className="py-2"></div>

          <TicketCardSection header="Location">
            <div className="flex justify-center">
              <div className="leaflet-container">
                <Map
                  position={[ticket.asset.kmFrom, ticket.asset.kmTo]}
                  asset={ticket.asset}
                />
              </div>
            </div>
          </TicketCardSection>
        </>
      ) : null}
    </div>
  ) : (
    <div>Should be a ticket</div>
  );
};

export default TicketCard;
