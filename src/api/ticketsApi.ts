import axios from "axios";
import { Ticket } from "../types/types";

const api = process.env.REACT_APP_API;
console.log("API", api);

export const getTickets = async (): Promise<Ticket[]> => {
  const { data } = await axios.get(`${api}/tickets`);
  return data;
};

export const getTicketById = async (id: number): Promise<Ticket> => {
  const { data } = await axios.get(`${api}/tickets/${id}`);
  return data;
};
