import ReactPlayer from 'react-player'

// url: The video url
// playing: True if the video starts playing automatically
// volume: The video volume
const VideoComponent = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  return (
    <ReactPlayer
      url={videoUrl}
      playing={false}
      volume={0.5}
    />
  )
}

export default VideoComponent
