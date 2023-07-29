import RenderingInner from '../../Components/Rendering/RenderingInner.js'
import RenderingProps from '../../Components/Rendering/RenderingProps.js'
import RenderingLogical from '../../Components/Rendering/RenderingLogical.js'

export default function ConditionalRenderingExample () {
  return (
    <div className='component-container' id='conditional-rendering'>
      <h1>Take a look into the code to see what's going on here</h1>
      <RenderingInner />
      <RenderingProps />
      <RenderingLogical />
    </div>
  )
}
