import React from 'react';
import './Header.scss';
import bag from '../../images/bag.svg';

export default function Header() {
  return (
    <header className='header'>
        <div className='header__container'>
            <p className='header__title'>Film!</p>
            <button className='header__button'>
                <img className='header__icon' src={bag} alt='Корзина' />
            </button>
        </div>
    </header>
  )
}
