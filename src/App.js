import React, { useState, useEffect } from "react";
import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import WrongLetters from "./components/WrongLetters";
import { showNotification as show } from "./helpers/helpers";
import Keyboard from "./components/Keyboard";

const words = [
  "application",
  "programming",
  "interface",
  "wizard",
  "house",
  "stage",
  "saxaphone",
  "quandry",
  "spirit",
  "activate",
  "momentum",
  "molecular",
  "trainwreck",
  "Hippopotamus",
  "drainage",
  "three",
  "pointer",
  "teacher",
  "childredn",
  "hoops",
  "bunny",
  "giraffe",
  "zebra",
  "monkey",
  "field",
  "zipper",
  "voice",
  "alloy",
  "leggings",
  "alpha",
  "remote",
  "headphones",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// let playable = true;

// const correctLetters = [];
// const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    // Reset Random Word
    selectedWord = words[Math.floor(Math.random() * words.length)];
  }

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />

        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Popup
          correctLetters={correctLetters}
          wrongLetters={wrongLetters}
          setPlayable={setPlayable}
          selectedWord={selectedWord}
          playAgain={playAgain}
        />
      </div>
      <div>
        <Notification showNotification={showNotification} />
        <Keyboard
          correctLetters={correctLetters}
          setCorrectLetters={setCorrectLetters}
          wrongLetters={wrongLetters}
          setWrongLetters={setWrongLetters}
          playable={playable}
          selectedWord={selectedWord}
          setShowNotification={setShowNotification}
        />
      </div>
    </div>
  );
}

export default App;
