
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'; 
import Stats from './components/Stats.jsx';
import Dashboard from './components/Dashboard.jsx'; 
function App() {

  return (
    <>
    <Router>
      <div className="bg-slate-950 min-h-screen">
        <Routes>
          {/* Level 0: Title Screen */}
          <Route path="/" element={<Home/>} />
          
          {/* Level 1: Main Portfolio Content */}
          <Route path="/portfolio" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
