const NumberGuess = () => (
  <>
    <button className='number-guess' onClick={handleClick}>
      Guess the number between 1 and 3...
    </button>
  </>
)

const handleClick = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1
  console.log(randomNum)
  const userInput = prompt('type a number')
  alert(`Computer number: ${randomNum}, your guess: ${userInput} `)
}

export default NumberGuess
