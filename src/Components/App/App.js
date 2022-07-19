import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Error from '../Error/Error';
import Voting from '../Voting/Voting';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
