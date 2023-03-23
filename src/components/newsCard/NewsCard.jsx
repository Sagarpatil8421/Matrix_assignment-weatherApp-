import React from 'react'
import './newsCard.css'

const NewsCard = ({img,headline}) => {
  return (
    <div className='news-card'>
        <div className={`news N${img}`}>
            <span>{headline}</span>
        </div>
    </div>
  )
}

export default NewsCard