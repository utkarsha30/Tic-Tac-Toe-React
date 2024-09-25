import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Players({ setPlayers }) {
  function playerName(index, event) {
    // Update the players array based on the index
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers]; // Create a new array to avoid mutation
      newPlayers[index] = event.target.value; // Update the specific player
      return newPlayers; // Return the new array
    });
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupPlayer1">
        <Form.Label>Player 1</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Player 1 Name"
          onChange={(event) => playerName(0, event)} // Pass the event
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPlayer2">
        <Form.Label>Player 2</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Player 2 Name"
          onChange={(event) => playerName(1, event)} // Pass the event
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Players;
