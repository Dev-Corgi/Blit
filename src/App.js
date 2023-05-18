import Profile from 'Assets/Profile.png'
import BlobComponent from   'Components/BlobComponent'
import React from 'react';
import {Route, Routes,useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroScene from 'Scene/Intro/IntroScene';
import MainScene from 'Scene/MainScene/MainScene';
import TextContainer from 'Components/TextContainer/TextContainer';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div className="App">
          <header>
            <div className='header-logotext'>
              <TextContainer text = {"Blit"}></TextContainer>
              </div>
            <img className = 'header-profile' src={Profile}/>
          </header>
        <BlobComponent/>
<AnimatePresence mode= "wait">
        <Routes location={location} key={location.pathname}>
          <Route path="Intro" element={
          <IntroScene />
          } />
          <Route path="Main" element={
          <MainScene />
          } />
        </Routes>
      </AnimatePresence>
    </div>


  );
}

export default App;
