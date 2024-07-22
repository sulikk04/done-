import React, { useState, useEffect } from 'react'
import './Header.css'
import Burger from './Burger'
import { Link } from 'react-router-dom'


export const Header = () => {
    const [menuActive, setMenuActive] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = [
        {value: 'Каталог', href: '/catalog', id: 1},
        {value: 'Стать наставником', href: '/mentor', id: 2},
        {value: 'Поддержать нас', href: '/support', id: 3},
    ]

    return (
        <header className={isScrolled ? 'header scrolled' : 'header'}>    
            <nav className='nav'>
                <div className="container">
                    <Link to="/" className="nav-brand">at Tariq</Link>
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
  )
}

