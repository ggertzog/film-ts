import React from 'react';
import './PopupFilm.scss';
import star from '../../images/liked.svg';
import close from '../../images/close-circle.svg'

interface Props {
    isOpenPopup: boolean;
}

export default function PopupFilm({isOpenPopup}: Props) {
    return (
        <div className={`popup ${isOpenPopup ? 'popup_opened' : ''}`}>
            <div className='popup__container'>
                <div className='popup__box'>
                    <div className='popup__about'>
                        <div>
                            <button>
                            <img src={star} alt='Избранное' />
                            </button>
                            <span>2.9</span>
                        </div>
                        <p>Итан Райт</p>
                        <p>&#183; Документальный</p>
                    </div>
                    <button className='popup__close-button'>
                        <img src={close} alt='закрыть' />
                    </button>
                </div>
                
                <h1 className='popup__title'>Архитекторы общества</h1>
                <p className='popup__text'>Документальный фильм, исследующий влияние искусственного интеллекта на общество и этические, философские и социальные последствия технологии.</p>
                <div className='popup__calendar'>
                    <div>
                        <p>26 апреля</p>
                        <button>123</button>
                        <button>123</button>
                        <button>123</button>
                        <button>123</button>
                        <button>123</button>
                    </div>
                    <div>
                        <p>27 апреля</p>
                        <button>321</button>
                        <button>321</button>
                        <button>321</button>
                        <button>321</button>
                        <button>321</button>
                    </div>
                    <div>
                        <p>28 апреля</p>
                        <button>231</button>
                        <button>231</button>
                        <button>231</button>
                        <button>231</button>
                        <button>231</button>
                    </div>
                </div>
                <button className='popup__submit-button'>Далее</button>
            </div>
        </div>
    )
}