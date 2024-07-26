import React from 'react'
import './Instruction.css'

export const Instruction = () => {
  return (
    <div className="insruction">
        <div className="insruction-container">
            <div className="insruction-title-wrapper">
                <span className="serv-title first-half">как работать </span>
                <span className="serv-title second-half"> на платформе</span>
            </div>
            
            <div className="instruction-block">
                <div className="instruction-step">
                    <div className="instruction-number">1</div>
                    <div className="instruction-title">Найдите наставника</div>
                    <div className="instruction-content">
                        <div className='instruction-content-text'>Тут плеер с видеоинструкцией</div>
                        <div className='like-content-u-know'></div>
                    </div>
                    <div className="instruction-button-wrapper">
                        <button className="instruction-button"><div className='instruction-button-text'>Далее</div></button>
                    </div>
                </div>
                <div className="instruction-step">
                    <div className="instruction-number">2</div>
                    <div className="instruction-title">Найдите наставника</div>
                    <div className="instruction-content">
                        <div className='instruction-content-text'>Тут плеер с видеоинструкцией</div>
                        <div className='like-content-u-know'></div>
                    </div>
                    <div className="instruction-button-wrapper">
                        <button className="instruction-button"><div className='instruction-button-text'>Далее</div></button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

