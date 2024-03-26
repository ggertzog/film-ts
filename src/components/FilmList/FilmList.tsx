import React from 'react';
import './FilmList.scss';
import FilmCard from '../FilmCard/FilmCard';
import data from '../../constants/data';

interface Props {
    setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FilmList({setIsOpenPopup}: Props) {
  return (
    <section className='film-list'>
        <div className='film-list__container'>
            {data.map((item) => {
                return (
                    <FilmCard 
                        key={item.id}
                        card={item}
                        setIsOpenPopup={setIsOpenPopup} 
                    />
                )
            })}
        </div>
    </section>
  )
}
