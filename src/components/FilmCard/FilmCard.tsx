import React from 'react';
import './FilmCard.scss';
import { IData } from '../../models';

interface CardData {
    card: IData
}

interface Props {
    setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilmCard: React.FC<CardData&Props> = ({ card, setIsOpenPopup }) => {

    function openPopup() {
        setIsOpenPopup(true);
    }

    return (
        <button className='card' onClick={() => {openPopup()}}>
            <img className='card__image' src={card.image} alt='Промо' />
            <p className='card__title'>{card.title}</p>
        </button>
    )
}


export default FilmCard;