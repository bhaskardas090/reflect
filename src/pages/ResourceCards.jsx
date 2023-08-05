
import React from 'react';
import Image from '../assets/Img1.png';
import '../styles/ResourceCards.css'

const ResourceCards = (props) => {
  return (
    <div className="horizontal-card">
      <img src={props.img} className="card-image" alt="Resource Visual" />
      <div className="card-content">
        <h3 className='heading'>{props.title}</h3>
        <p className='content'>{props.content}</p>
      </div>
    </div>
  );
};

export default ResourceCards;





