import React, { useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupFilm from '../PopupFilm/PopupFilm';

export default function App() {

  const[isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <div>
        <PopupFilm 
          isOpenPopup={isOpenPopup}
        />
        <Header />
        <Main 
          setIsOpenPopup={setIsOpenPopup}
        />
        
    </div>
  )
}
