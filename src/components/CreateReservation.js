import React, { useContext, useState } from "react";
import Container from "../styled-components/Containers/Container";
import Typography from "../styled-components/Typography";
import TextField from "../styled-components/Inputs/TextField";
import Button from "../styled-components/Inputs/Button";
import ReservationContext from "../ReservationContext";

const CreateReservation = () => {
  const { addReservation } = useContext(ReservationContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addReservation({
      id: 5,
      title,
      description,
      date: new Date()
    });
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
          />
          <TextField
            style={{ width: "100%", marginBottom: 20 }}
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Button style={{ width: "100%", marginTop: 20 }} type="submit">
            Okay
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default CreateReservation;
