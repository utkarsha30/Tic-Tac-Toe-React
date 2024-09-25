import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { calculateWinner } from "../utils/utils";
import Board from "./Board";
import Players from "./Players";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [playerNames, setPlayerNames] = useState(["", ""]); // Initialize with empty strings
  const [gameStarted, setGameStarted] = useState(false); // State to track if the game has started
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares, playerNames);
  let status;

  const notify = (message) =>
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

  useEffect(() => {
    if (winner) {
      notify("Winner: " + winner);
    }
  }, [winner]);

  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player : " + (xIsNext ? playerNames[0] : playerNames[1]);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to the move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li className="m-2" key={move}>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  useEffect(() => {
    notify("Welcome to Tic Tac Toe!");
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {!gameStarted ? ( // Conditional rendering of the Players component
        <Players
          setPlayers={(names) => {
            setPlayerNames(names);
            setGameStarted(true); // Start the game on submit
          }}
        />
      ) : (
        <>
          <div className="title-board">
            {playerNames[0]} VS {playerNames[1]}
          </div>
          <div className="status">{status}</div>
          <div className="game">
            <div className="game-board">
              <Board
                xIsNext={xIsNext}
                squares={currentSquares}
                onPlay={handlePlay}
                players={playerNames}
              />
            </div>
            <div className="game-info">
              Steps:
              <ol>{moves}</ol>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Game;
