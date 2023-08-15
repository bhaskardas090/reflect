
// import React from 'react';
// import Image from '../assets/Img1.png';
// import '../styles/ResourceCards.css'

// const ResourceCards = (props) => {
//   return (
//     <div className="horizontal-card">
//       <img src={props.img} className="card-image" alt="Resource Visual" />
//       <div className="card-content">
//         <h3 className='heading'>{props.title}</h3>
//         <p className='content'>{props.content}</p>
//       </div>
//     </div>
//   );
// };

// export default ResourceCards;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ResourceCards.css';

const ResourceCards = (props) => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    const stateToPass = {
      img: props.img,
      title: props.title,
      content: props.content,
    };
    console.log('Navigating with state:', stateToPass);
    navigate('/blog-detail', { state: stateToPass });
  };

  return (
    <div className="horizontal-card">
      <img src={props.img} className="card-image" alt="Resource Visual" />
      <div className="card-content">
        <h3 className='heading'>{props.title}</h3>
        <p className='content'>{props.content}</p>
        <button onClick={handleReadMoreClick} className='read-more'>Read More</button>
      </div>
    </div>
  );
};

export default ResourceCards;



