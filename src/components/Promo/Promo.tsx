import React from 'react';
import './Promo.scss';
import star from '../../images/liked.svg';



const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__background'>
        <img src='http://neattysh.ru/wp-content/uploads/2013/08/kino-043.jpg' alt='фон' />
        <div></div>
      </div>
      <div className='promo__container'>
        <div className='promo__about'>
          <div>
            <button>
              <img src={star} alt='Избранное' />
            </button>
            <span>2.9</span>
          </div>
          <p>Итан Райт</p>
          <p>&#183; Документальный</p>
        </div>
        <h1 className='promo__title'>Архитекторы общества</h1>
        <p className='promo__text'>Документальный фильм Итана Райта исследует влияние технологий на современное общество, уделяя особое внимание роли искусственного интеллекта в формировании нашего будущего. Фильм исследует этические, философские и социальные последствия гонки технологий ИИ и поднимает вопрос: какой мир мы создаём для будущих поколений.</p>
        <button className='promo__submit'>Купить билет</button>
      </div>
    </section>
  )
}


export default Promo;