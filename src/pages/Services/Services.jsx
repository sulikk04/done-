import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

export const Services = () => {
  return (
    <div className="serv">
        <div className="serv-container">
            <div className="serv-title-wrapper">
                <span className="serv-title first-half">Кому подойдут</span>
                <span className="serv-title second-half"> наши услуги</span>
            </div>

            <div className="serv-blocks">
                <div className="serv-block">
                    <div className="serv-block-wrapper">
                        <div className="serv-descr">
                            <div className="serv-round">
                                <div className="serv-icon"></div>
                                <div className="serv-subtitle">Для тех, кто далеко от<br /> Родины</div>
                            </div>
                            <div className="serv-text">
                            Онлайн-платформа по поиску наставников по изучению Корана идеально подходит для тех, кто находится вдали от своей Родины. Она помогает поддерживать духовные связи, предлагая доступ к квалифицированным наставникам, готовым проводить индивидуальные занятия на различных языках. Это позволяет оставаться на связи с религиозным сообществом, где бы вы ни находились, и углублять свои знания о Коране.
                            </div>
                        </div>
                    </div>
                    <div className="serv-button-wrapper">
                        <button className="serv-button serv-button-logo"><Link to='' className="serv-button-text">Приступить</Link></button>
                    </div>
                </div>
                <div className="serv-block">
                    <div className="serv-block-wrapper">
                        <div className="serv-descr">
                            <div className="serv-round">
                                <div className="serv-icon"></div>
                                <div className="serv-subtitle">Для наших прекрасных<br /> сестер</div>
                            </div>
                            <div className="serv-text">
                            Платформа специально разработана для женщин, обеспечивая удобное и поддерживающее пространство для поиска наставников по изучению Корана. Женщины могут найти наставников, которые понимают их уникальные потребности и график, и готовы проводить индивидуальные занятия, что способствует углубленному и комфортному обучению. Это позволяет сестрам углубить свои знания и укрепить духовные связи в удобное для них время.
                            </div>
                        </div>
                    </div>
                    <div className="serv-button-wrapper">
                        <button className="serv-button serv-button-logo"><Link to='' className="serv-button-text">Приступить</Link></button>
                    </div>
                </div>
                <div className="serv-block">
                    <div className="serv-block-wrapper">
                        <div className="serv-descr">
                            <div className="serv-round">
                                <div className="serv-icon"></div>
                                <div className="subtitle-young"><div className="serv-subtitle ">Для молодых</div></div>
                            </div>
                            <div className="serv-text">
                            Молодежь найдет на нашей платформе отличные возможности для поиска наставников по изучению Корана. Интерактивные и индивидуальные занятия с опытными наставниками помогают молодым людям глубже понять религиозные тексты и их значимость в современной жизни. Платформа поддерживает стремление молодежи к духовному и интеллектуальному развитию, предлагая гибкий график и доступ к наставникам, которые могут вдохновить и направить их на пути изучения Корана.
                            </div>
                        </div>
                    </div>
                    <div className="serv-button-wrapper">
                        <button className="serv-button serv-button-logo"><Link to='' className="serv-button-text">Приступить</Link></button>
                    </div>
                </div> 
            </div>
            
            <div className="serv-info-wrapper">
                <div className="serv-info">
                    <div className="serv-details">
                        <div className="serv-sublabel">100 занятий</div>
                        <div className="serv-subtext">Проведено на нашей платформе</div>
                    </div>
                    <div className="serv-subicon"></div>
                </div>
                <div className="serv-info">
                    <div className="serv-details">
                        <div className="serv-sublabel serv-sublabel-2">10 наставников</div>
                        <div className="serv-subtext serv-subtext-2">Готовых поделиться с вами своим опытом</div>
                    </div>
                    <div className="serv-subicon serv-subicon-2"></div>
                </div>
                <div className="serv-info">
                    <div className="serv-details">
                        <div className="serv-sublabel">50 учеников</div>
                        <div className="serv-subtext">Пользуются нашей платформой</div>
                    </div>
                    <div className="serv-subicon serv-subicon-3"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

