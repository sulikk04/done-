import React, { useState } from 'react'
import '../../styles/Header/Header.css'
import Burger from './Burger'


const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value: 'Каталог', href: '/catalog'}, {value: 'Стать наставником', href: '/mentor'}, {value: 'Поддержать нас', href: '/support'} ]

  return (
    <>
        <header>    
            <nav className='nav'>
                <div className="container">
                    <div className="nav-brand">at Tariq</div>
                    <div className="nav-menu">
                        <ul className="menu">
                            <li className="menu-item logo-catalog"><div className="menu-link">Каталог</div></li>
                            <li className="menu-item logo-mentor"><div className="menu-link">Стать наставником</div></li>
                            <li className="menu-item logo-support"><div className="menu-link">Поддержать нас</div></li>
                        </ul>


                        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                            <span/>
                        </div>
                    </div>
                </div>  
                <Burger items={items} active={menuActive} setActive={setMenuActive} />
            </nav>
        </header>
        

    </>
  )
}

export default Header