import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import App from "./App";
import { Login } from "./Auth/Login/Login";
import { HeaderComponent } from "./components/header/header.component";
import { AppContext } from "./contexts";
import EventPage from "./eventHomePage/homePage";
import { AppRoutes } from "./utils/AppRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppContext>
        <AppRoutes/>
      </AppContext>
    </Router>
  </React.StrictMode>
);
