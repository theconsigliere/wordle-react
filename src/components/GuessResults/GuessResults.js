import React from "react"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"

function GuessResults({ allSearch }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((result, currentIndex) => (
        <p className="guess" key={currentIndex}>
          {range(5).map((result, index) => (
            <span className="cell">
              {allSearch[currentIndex] && allSearch[currentIndex].charAt(index)}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default GuessResults
