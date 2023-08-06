import novachrono from '../../Assets/images/Novachrono.webp'
import AudioComponent from '../../Components/AudioComponent'
import VideoComponent from '../../Components/VideoComponent'

import './EmbeddedAssetsExample.css'

const EmbeddedAssetsExample = () => {
  const randomImageUrl = 'https://picsum.photos/400/265'

  return (
    <div>
      <div className='example-container' id='embedded-images-example'>
        <h1>Embedded Images</h1>

        {/* This is the direct way to add an embedded image */}
        <img
          height={200}
          src={novachrono}
          alt='Magician king (direct way)'
        />

        {/* The second way is by using the require statement */}
        <img
          height={200}
          src={require('../../Assets/images/Novachrono.webp')}
          alt='Magician king (require statement)'
        />

        {/* This is an approach to get a file hosted on the internet */}
        <img
          height={200}
          src={randomImageUrl}
          alt='Magician king (require statement)'
        />
      </div>
      <div className='example-container' id='embedded-video-example'>
        <h1>Embedded Video</h1>
        <VideoComponent />
      </div>

      <div className='example-container' id='embedded-audio-example'>
        <h1>Embedded Audio</h1>
        <AudioComponent />
      </div>
    </div>
  )
}

export default EmbeddedAssetsExample
