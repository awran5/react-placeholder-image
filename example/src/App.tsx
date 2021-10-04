import { DummyImage, useDummyImage } from 'react-placeholder-image'

const App = () => {
  const image = useDummyImage({ shape: 'image' })

  return (
    <div style={{ padding: 20 }}>
      <DummyImage width={500} height={500} placeholder='Colored!' bgColor='#0a1929' fgColor='#eb0014' />
      <img src={image} alt='aaa' />
    </div>
  )
}

export default App
