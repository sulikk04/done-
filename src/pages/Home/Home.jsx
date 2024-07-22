import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


export const Home = () => {

  return (
    <section className="home">
      <div className="container">
        <div className="home-wrapper">  
          <div className="home-block">
            <div className="home-descr">
              <div className="home-title">Таджвид  1 на 1 с учителем</div>
              <div className="home-subtitle">“Читай во имя твоего Господа, Который сотворил все сущее” <br/>Коран, 96:1</div>
            </div>  

            <div className="home-buttons">
              <button className="button-work home-logo-work"><Link to='' className='home-work'>Как работает платформа</Link></button>
              <button className="button-start home-logo-start"><Link to='' className='home-start'>Начать изучать</Link></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

