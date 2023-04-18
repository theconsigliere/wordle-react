import React from "react"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessInput({
  searchTerm,
  setSearchTerm,
  allSearch,
  addToAllSearch,
  answer,
}) {
  const [isComplete, setCompleted] = React.useState(false)
  const [isFailed, setFailed] = React.useState(true)
  const length = allSearch.length + 1

  function handleSubmit(e) {
    e.preventDefault()
    // On Submit update array
    console.log(length, NUM_OF_GUESSES_ALLOWED)

    const newArray = [...allSearch, searchTerm].slice(0, NUM_OF_GUESSES_ALLOWED)

    addToAllSearch(newArray)

    // empty string again to clear out input after submission
    setSearchTerm("")

    if (length === NUM_OF_GUESSES_ALLOWED) {
      return setCompleted(true)
    }

    if (searchTerm === answer) {
      setFailed(false)
      return setCompleted(true)
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>

      {isComplete && (
        <div className={isFailed ? "sad banner" : "happy banner"}>
          {!isFailed && (
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>
                {length} {length > 1 ? " guesses" : "guess"}
              </strong>
              .
            </p>
          )}
          {isFailed && (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </div>
      )}

      <input
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        disabled={isComplete}
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInput
