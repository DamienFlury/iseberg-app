import React from "react";
import Container from "../styled-components/Containers/Container";
import Typography from "../styled-components/Typography";
import { Parallax } from "react-parallax";
import Paper from "../styled-components/Containers/Paper";
import Button from "../styled-components/Inputs/Button";
import { Link } from "react-router-dom";

const Home = () => (
  <Container>
    <Typography variant="h1">Willkommen!</Typography>
    <Paper style={{ marginTop: 20 }}>
      <Parallax bgImage="https://s3.eu-central-1.amazonaws.com/bosglive/media/location/images/2015/05/bergrestaurant_magisalp_hasliberg_reuti_bergrestaurant_magisalp_hasliberg_01.jpg"
        strength={500}>
        <div style={{ height: 800 }}></div>
      </Parallax>
    </Paper>
    <div style={{ marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
      <Link to="/reservations"><Button style={{ marginRight: 40 }}>View Reservations</Button></Link>
      <Link to="/new-reservation">
        <Button>New Reservation</Button>
      </Link>
    </div>
  </Container>
)
export default Home;
