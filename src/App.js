import './App.css';

import { Route, Routes } from 'react-router-dom';
import FavList from './Components/FavList/FavList';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/"  element={<Home/>}> </Route>
        <Route path="/favoriteList" element={<FavList/>} > </Route>
      </Routes>

    </>
  );
}

export default App;
