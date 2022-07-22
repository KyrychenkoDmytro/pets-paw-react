import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Error from '../Error/Error';
import Voting from '../Voting/Voting';
import Breeds from '../Breeds/Breeds';
import Gallery from '../Gallery/Gallery';
import IdBreed from '../Breeds/IdBreed/IdBreed';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/breeds/id" element={<IdBreed />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
