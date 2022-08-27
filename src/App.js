import './App.css';
import Main from "./pages/Home"
import Slider from './components/Slider';
import "./App.css"
import { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import DetailPage from './pages/Detail-product';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/slider' element={<Slider/>}/>
      <Route exact path='/detail-page/:id' element={<DetailPage/>}/>
    </Routes>
  );
}

export default App;
