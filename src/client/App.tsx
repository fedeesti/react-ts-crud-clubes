import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateTeam from './pages/CreateTeam';
import './assets/index.css';

function App() {
  return (
    <main className="text-center min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-team" element={<CreateTeam />} />
      </Routes>
    </main>
  );
}

export default App;
