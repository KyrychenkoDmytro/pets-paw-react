import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from '../Components/Home/Home';
import Nav from '../Components/Nav/Nav';
import Error from '../Components/Error/Error';
import Voting from '../Containers/Voting/Voting';
import Breeds from '../Containers/Breeds/Breeds';
import Gallery from '../Containers/Gallery/Gallery';
import IdBreed from '../Containers/Breeds/IdBreed/IdBreed';
import Search from '../Containers/Search/Search';
import Like from '../Containers/Like/Like';
import Dislike from '../Containers/Dislike/Dislike';
import Favourite from '../Containers/Favourite/Favourite';
import requests, { api_key } from '../requests';


function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/voting" element={<Voting fetchLikeAndDislike={requests.fetchDisAndLike} fetchFavourites={requests.fetchFavourites}/>} />
          <Route path="/breeds" element={<Breeds fetchBreeds={requests.fetchBreeds} />} />
          <Route path="/gallery" element={<Gallery
            fetchBreeds={requests.fetchBreeds}
            fetchSearch={requests.fetchSearch}
            fetchFavourites={requests.fetchFavourites}
            api_key={api_key}
            fetchUpload={requests.fetchUpload}
          />} />
          <Route path="/breeds/:breedsId" element={<IdBreed fetchBreedId={requests.fetchBreedId} />} />
          <Route path="/search" element={<Search fetchBreeds={requests.fetchBreeds} fetchSearch={requests.fetchSearch}/>} />
          <Route path="/likes" element={<Like fetchLike={requests.fetchDisAndLike} api_key={api_key} />} />
          <Route path="/dislikes" element={<Dislike fetchDislike={requests.fetchDisAndLike} api_key={api_key} />} />
          <Route path="/favourites" element={<Favourite fetchFavourites={requests.fetchFavourites} api_key={api_key} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
