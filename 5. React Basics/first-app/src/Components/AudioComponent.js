const AudioComponent = () => {
  const bird1 = new Audio('https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3')
  const bird2 = new Audio('https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3')

  return (
    <div>
      <button onClick={(event) => toogleAudio(event, bird1)}>Caspian Tern 1</button>
      <button onClick={(event) => toogleAudio(event, bird2)}>Caspian Tern 2</button>
    </div>
  )
}

const toogleAudio = (event, bird) => {
  bird.paused ? bird.play() : bird.pause()
}

export default AudioComponent
