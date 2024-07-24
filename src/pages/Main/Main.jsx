import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

export const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="main-wrapper">  
          <div className="main-block">
            <div className="main-descr">
              <div className="main-title">Таджвид  1 на 1 с учителем</div>
              <div className="main-subtitle">“Читай во имя твоего Господа, Который сотворил все сущее” <br/>Коран, 96:1</div>
            </div>  

            <div className="main-buttons">
              <button className="button-work main-logo-work"><Link to='' className='main-work'>Как работает платформа</Link></button>
              <button className="button-start main-logo-start"><Link to='' className='main-start'>Начать изучать</Link></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
