import novachrono from '../../Assets/images/Novachrono.webp'
import './EmbeddedAssetsExample.css'

const EmbeddedAssetsExample = () => {
  const randomImageUrl = 'https://picsum.photos/400/265'

  return (
    <div>
      <h1>
        Task: add three images with some styling
      </h1>

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
  )
}

export default EmbeddedAssetsExample
