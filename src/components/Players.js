import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Players({ setPlayers }) {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlayers([player1Name, player2Name]);
  };

  return (
    <>
      <div className="playes-title">Add Players Information </div>
      <div className="player-info">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupPlayer1">
            <Form.Label>Player 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Player 1 Name"
              value={player1Name} // Bind the input to local state
              onChange={(event) => setPlayer1Name(event.target.value)} // Update local state
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPlayer2">
            <Form.Label>Player 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Player 2 Name"
              value={player2Name} // Bind the input to local state
              onChange={(event) => setPlayer2Name(event.target.value)} // Update local state
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {" "}
            {/* Trigger handleSubmit on click */}
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Players;
