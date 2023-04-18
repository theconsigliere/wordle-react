import React from "react"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessInput({ searchTerm, setSearchTerm, allSearch, addToAllSearch }) {
  function handleSubmit(e) {
    e.preventDefault()
    // On Submit update array
    const newArray = [...allSearch, searchTerm].slice(0, NUM_OF_GUESSES_ALLOWED)

    addToAllSearch(newArray)

    // empty string again to clear out input after submission
    setSearchTerm("")
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInput
