import React from 'react'
import './Burger.css'

const Burger = ({items, active, setActive}) => {
  return (
    <div className={active ? 'burger active' : 'burger'} onClick={() => setActive(false)}>
        <div className="burger-content">
            <ul>
                {items.map(item => 
                    <div className="burger-li">
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Burger