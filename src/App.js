import React, { useState } from "react";
import AppBar from "./styled-components/AppBar/AppBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import ReservationContext from "./ReservationContext";
import { ThemeProvider } from "styled-components";
import AppBarTitle from "./styled-components/AppBar/AppBarTitle";
import AppBarLink from "./styled-components/AppBar/AppBarLink";
import CreateReservation from "./components/CreateReservation";

const App = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      title: "test",
      description: "jdskf",
      date: new Date()
    },
    {
      id: 2,
      title: "second",
      description: "lol",
      date: new Date()
    }
  ]);

  const addReservation = reservation => {
    const newReservations = reservations.slice();
    newReservations.push(reservation);
    setReservations(newReservations);
  };

  const removeReservation = id => {
    setReservations(reservations.filter(r => r.id !== id));
  };
  const theme = {
    palette: {
      primary: "#700000",
      primaryDark: "#600000"
    },
    typography: {
      fontFamily: 'montserrat'
    }
  };

  return (
    <ReservationContext.Provider
      value={{ reservations, addReservation, removeReservation }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppBar>
            <AppBarTitle>Iseberg</AppBarTitle>
            <AppBarLink to="/reservations">Reservations</AppBarLink>
            <AppBarLink to="/new-reservation">New Reservation</AppBarLink>
          </AppBar>
          <Switch>
            <Route path="/reservations" component={Reservations} />
            <Route path="/new-reservation" component={CreateReservation} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </ReservationContext.Provider>
  );
};

export default App;
