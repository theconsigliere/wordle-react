import React from "react"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"
import { checkGuess } from "../../game-helpers"

function GuessResults({ allSearch, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((result, currentIndex) => (
        <p className="guess" key={currentIndex}>
          {range(5).map((result, index) => (
            <span
              className={
                allSearch[currentIndex]
                  ? "cell " +
                    checkGuess(allSearch[currentIndex], answer)[index].status
                  : "cell"
              }
              key={index}
            >
              {allSearch[currentIndex] && allSearch[currentIndex].charAt(index)}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default GuessResults
