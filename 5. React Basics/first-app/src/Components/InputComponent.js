import { useState } from 'react'

const InputComponent = () => {
  const [inputText, setInputText] = useState('Hello')
  const handleChange = e => setInputText(e.target.value)

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setInputText('Hello from hooks')}>
        Reset
      </button>
    </>
  )
}

export default InputComponent
