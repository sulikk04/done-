import React from 'react'
import './Mentors.css'

export const Mentors = () => {
  return (
   <div className="mentors">
      <div className="container">
         <div className="mentors-title-wrapper">
            <span className="mentors-title half-first">Наши</span>
            <span className="mentors-title half-second"> Наставники</span>
         </div>

         <div className="mentors-blocks">
            <div className="mentors-block">
				<div className="mentors-img"></div>
				<div className="mentor-details">
					<div className="mentor-descr">
						<div className="mentors-descr-1-column">
							<div className="mentors-name-text">
								<div className="mentors-name">Ахмад Мединский</div>
								<div className="mentors-text">Я учитель Корана, стремящийся передать своим <br />ученикам любовь и уважение к Священному <br />Писанию.</div>
							</div>
							
							
							<div className="mentors-tags-buttons">
								<div className="mentors-tags">
									<button className="mentors-tag-button">Таджвид</button>
									<button className="mentors-tag-button">Махрадж</button>
									<button className="mentors-tag-button">и еще 9...</button>
								</div>
							</div>
						</div>
						

						<div className="mentors-info">
							<div className="info-item">
								<span className="info-label info-label-icon-1">Провел уроков на платформе: </span>
								<span className="info-value">215</span> {/* when i get api i'll write this like a variable */}
							</div> 
							<div className="info-item">
								<span className="info-label info-label-icon-2">Опыт:</span>
								<span className="info-value">10 лет</span> {/* same */}
							</div>
						</div>
						<div className="info-item">
							<span className="info-price">500₽ / в час</span> {/*same */}
						</div>
					</div>
				</div>
            </div>
         </div>
      </div>
    </div>
  )
}

