import React from 'react';
import './Main.scss';
import Promo from '../Promo/Promo';
import FilmList from '../FilmList/FilmList';

interface Props {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main = ({setIsOpenPopup}: Props) => {
  return (
    <main>
        <Promo />
        <FilmList 
          setIsOpenPopup={setIsOpenPopup}
        />
    </main>
  )
}


export default Main;