import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './componets/Nav'
import { Treact } from './componets/Treact'
function App() {

  return (
    <div className="text-center">
      <Nav />
      <p className='text-6xl'>Vite + React + TypeScript</p>
      <div>
        <Routes>
          <Route path='react' element={<Treact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
