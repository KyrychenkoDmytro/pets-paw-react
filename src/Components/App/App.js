import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Error from '../Error/Error';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
