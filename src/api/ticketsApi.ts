import axios from "axios";
import { Ticket } from "../types/types";

const api = process.env.REACT_APP_API;
console.log("API", api);

export const getTickets = async (): Promise<Ticket[]> => {
  try {
    const { data } = await axios.get(`${api}/tickets`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getTicketById = async (id: number): Promise<Ticket> => {
  try {
    const { data } = await axios.get(`${api}/tickets/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const editTicketById = async (
  id: number,
  ticket: any
): Promise<Ticket> => {
  try {
    const { data } = await axios.put(`${api}/tickets/`, {
      id,
      ticket,
    });
    return data;
  } catch (err) {
    throw err;
  }
};
