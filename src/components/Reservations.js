import React, { useContext } from "react";
import ReservationContext from "../ReservationContext";
import Container from "../styled-components/Containers/Container";
import Typography from "../styled-components/Typography";
import Paper from "../styled-components/Containers/Paper";
import Table from "../styled-components/Table/Table";
import TableBody from "../styled-components/Table/TableBody";
import TableRow from "../styled-components/Table/TableRow";
import TableCell from "../styled-components/Table/TableCell";
import TableHead from "../styled-components/Table/TableHead";

const Reservations = () => {
  const { reservations } = useContext(ReservationContext);

  return (
    <Container>
      <Typography variant="h1">Reservations</Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Title</Typography>
              </TableCell>
              <TableCell>
                <Typography>Description</Typography>
              </TableCell>
              <TableCell>
                <Typography>Date</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map(reservation => (
              <TableRow key={reservation.id}>
                <TableCell>
                  <Typography>{reservation.title}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{reservation.description}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{reservation.date.toLocaleDateString()}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};
export default Reservations;
