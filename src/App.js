import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
