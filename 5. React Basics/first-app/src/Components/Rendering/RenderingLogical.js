const RenderingLogical = () => {
  const val = prompt('Anything but a 0')

  return (
    <>
      <h1>Please don't type in a zero</h1>
      {val && <h2>Yay, no 0 was typed in!</h2>}
    </>
  )
}

export default RenderingLogical
