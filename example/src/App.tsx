import { DummyImage } from 'react-placeholder-image'

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <DummyImage width={500} height={500} placeholder='Colored!' bgColor='#0a1929' fgColor='#eb0014' />
    </div>
  )
}

export default App
