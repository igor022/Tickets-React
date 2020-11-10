import React from "react";
import axios from "axios";

import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

import { Ticket } from "./types/types";
import TicketsPage from "./components/TicketsPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="p-4 bg-primary-100 text-gray-400 text-sm min-h-screen">
          <div>
            <h2 className="text-gray-100 border-b-4  border-secondary-violet text-2xl">
              Tickets
            </h2>
          </div>
          <Route path="/ticket/:id" component={TicketsPage} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
