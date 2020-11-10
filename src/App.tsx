import React from "react";
import axios from "axios";

import NavBar from "./components/NavBar";

import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

import TicketsPage from "./components/TicketsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="p-4 bg-primary-100 text-gray-400 text-sm min-h-screen">
        <NavBar />
        <Route path="/ticket" component={TicketsPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
