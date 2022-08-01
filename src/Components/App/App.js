import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Error from '../Error/Error';
import Voting from '../Voting/Voting';
import Breeds from '../Breeds/Breeds';
import Gallery from '../Gallery/Gallery';
import IdBreed from '../Breeds/IdBreed/IdBreed';
import Search from '../Search/Search';
import Like from '../Like/Like';
import Dislike from '../Dislike/Dislike';
import Favourite from '../Favourite/Favourite';

import { myFavourites } from '../../store/slices/search/searchPanelSlice';

const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/favourites', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': api_key
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        data = data.filter((item) => item.image.url !== undefined);
        // console.log(data);
        data = data.reduce((accum, item) => {
          accum[item.image_id] = item.id;
          return accum;
        }, {})
        // console.log(data);
        dispatch(myFavourites(data));
      })
  }, [])

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/breeds/:breedsId" element={<IdBreed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/likes" element={<Like />} />
          <Route path="/dislikes" element={<Dislike />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
