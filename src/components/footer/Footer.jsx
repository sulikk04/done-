import React from 'react'
import '../../styles/Footer/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-sub">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-block-logo">
                        <div className="footer-brand">at Tariq</div>
                        <div className="coran-info">“Читай во имя твоего Господа,   <br />Который сотворил все сущее” <br />Коран, 96:1</div>
                    </div>
                    <div className="footer-block footer-block1">
                        <ul className="footer-menu">
                            <li className="footer-item"><div className="footer-link">Стать наставником</div></li>
                            <li className="footer-item"><div className="footer-link">Поддержать проект</div></li>
                            <li className="footer-item"><div className="footer-link">Каталог</div></li>
                        </ul>
                    </div>
                    <div className="footer-block footer-block2">
                        <ul className="footer-menu">
                            <li className="footer-item"><div className="footer-link">Служба поддержки</div></li>
                            <li className="footer-item"><div className="footer-link">Отказ от ответственности</div></li>
                            <li className="footer-item"><div className="footer-link footer-long-link">Политика в отношении обработки<br />персональных данных</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer