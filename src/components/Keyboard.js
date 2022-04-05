import React from "react";
import { showNotification as show } from "../helpers/helpers";

const Keyboard = ({
  correctLetters,
  setCorrectLetters,
  wrongLetters,
  setWrongLetters,
  playable,
  selectedWord,
  setShowNotification,
}) => {
  const keyLayout = [
    // "1",
    // "2",
    // "3",
    // "4",
    // "5",
    // "6",
    // "7",
    // "8",
    // "9",
    // "0",
    // "backspace",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    // "caps",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    // "enter",
    // "done",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    // ",",
    // ".",
    // "?",
    // "space",
  ];

  //   function keyboardPress(key) {
  //     console.log(key);
  //   }

  const handleKeyboardDown = (event) => {
    if (playable) {
      const letter = event.toLowerCase();

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

  return (
    <div className="keyboard">
      {keyLayout.map((letter, index) =>
        letter === "l" || letter === "p" ? (
          <>
            <button
              onClick={() => handleKeyboardDown(letter)}
              type="button"
              className="keyboard__key"
              key={index}
            >
              {letter}
            </button>
            <br></br>
          </>
        ) : (
          <>
            <button
              onClick={() => handleKeyboardDown(letter)}
              type="button"
              className="keyboard__key"
              key={index}
            >
              {letter}
            </button>
            {/* <br></br> */}
          </>
        )
      )}
    </div>
  );
};

export default Keyboard;
