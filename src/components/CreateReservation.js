import React, { useContext, useState } from "react";
import Container from "../styled-components/Containers/Container";
import Typography from "../styled-components/Typography";
import TextField from "../styled-components/Inputs/TextField";
import Button from "../styled-components/Inputs/Button";
import ReservationContext from "../ReservationContext";
import Calendar from 'react-calendar';
import { withRouter } from 'react-router-dom';

const CreateReservation = withRouter(({ history }) => {
  const { reservations, addReservation } = useContext(ReservationContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const handleSubmit = e => {
    e.preventDefault();
    addReservation({
      id: reservations.length + 1,
      title,
      description,
      date
    });
    history.push('/reservations')
  };
  return (
    <Container>
      <Typography variant="h1">New Reservation</Typography>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ width: "100%", marginBottom: 20 }}
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <TextField
            style={{ width: "100%", marginBottom: 20 }}
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
          <Calendar style={{ width: "100%", marginBottom: 20 }}
            placeholder="Date"
            type="date"
            value={date}
            onChange={date => setDate(date)} />
          <Button style={{ width: "100%", marginTop: 20 }} type="submit" disabled={title === '' || description === ''}>
            Okay
          </Button>
        </form>
      </Container>
    </Container>
  );
}
)

export default CreateReservation;
