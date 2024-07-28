import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export const Header = () => {

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
                    </div>
                </div>  
            </nav>
        </header>
  )
}

