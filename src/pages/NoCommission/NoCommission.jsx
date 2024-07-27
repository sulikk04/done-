import React from 'react'
import './NoCommission.css'

export const NoCommission = () => {
  return (
    <div className='commission'>
        <div className="commission-container">
          <div className="commission-wrapper">
            <div className="commission-png"></div>

            <div className="commission-descr">
              <div className="commission-text">Ваша поддержка через донаты поможет проекту наши серверы, развивать платформу и привлекать талантливых наставников. Поддержите нас, чтобы мы могли продолжать нашу миссию.</div>
              <div className="commission-button-wrapper">
                <button className="commission-button"><div className='commission-button-text'>Поддержать проект</div></button>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

