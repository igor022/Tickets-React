import axios from "axios";
import { Ticket } from "../types/types";
export const getTickets = async (): Promise<Ticket[]> => {
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"
  );
  return data;
};
