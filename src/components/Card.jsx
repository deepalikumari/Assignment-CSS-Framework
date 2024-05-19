import React from 'react';

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card-content'>
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium Logo" />
        </div>
        <div className='text-content'>
          <h1 className='title'>Kalvium Store</h1>
          <h4 className='subtitle'>You have a new course!</h4>
        </div>
      </div>
    </div>
  )
}

export default Card;
