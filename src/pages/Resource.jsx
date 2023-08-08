import React from 'react'
import '../styles/Resource.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import meditationImage from '../assets/meditation.png'
import blog1 from '../assets/blog01.jpeg'
import blog2 from '../assets/blog02.jpeg'
import blog3 from '../assets/blog03.jpeg'
import blog4 from '../assets/blog04.jpeg'
import ResourceCards from './ResourceCards';
import VideoCard from './VideoCard';
import PodcastCard from './PodcastCard';
import { useState } from 'react';


function Resource() {
  const [selectedTab, setSelectedTab] = useState('blogs');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'blogs':
        return (
          <>
            <ResourceCards title="5 Daily Habits to Improve Your
        Mental Well being" content="Introduction: Taking care of your
        mental health is just as important as
        taking care of your physical health. In
        our fast-paced and stressful world,
        it's crucial to" img={blog1} />
            <ResourceCards title="Nurturing Your Mental Wellness:
      Strategies for a Balanced Life" content="Introduction: Taking care of your
      mental health is just as important as
      taking care of your physical health. In
      our fast-paced and stressful world,
      it's crucial to" img={blog2} />
        <ResourceCards title="The Power of Self-Compassion:
      Embracing Kindness for Mental
       Well being" content="Introduction: Taking care of your
      mental health is just as important as
      taking care of your physical health. In
      our fast-paced and stressful world,
        it's crucial to" img={blog3} />
         <ResourceCards title="Finding Balance: Strategies for
      Prioritizing Mental Wellness in
      a Busy Life" content="Introduction: Taking care of your
      mental health is just as important as
      taking care of your physical health. In
      it's crucial to " img={blog4} />
          </>
        );
      case 'videos':
        return <VideoCard />;
      case 'podcasts':
        return <PodcastCard />;
      default:
        return null;
    }
  };


  return (
    <div className='container'>
      <div className='heading'><ArrowBackIcon style={{ color: "black" }} /> Resources</div>
      <div className='content-container'>
        <p className='para'>
          “We can’t always change what’s happening
          around us, but we can change
          what happens within us.”
        </p>
        <img src={meditationImage}></img>
      </div>
      <div className='navbar'>
        <ul>
          <li onClick={() => handleTabClick('blogs')}>Blogs</li>
          <li onClick={() => handleTabClick('videos')}>Videos</li>
          <li onClick={() => handleTabClick('podcasts')}>Podcasts</li>
        </ul>
      </div>
      <hr></hr>
      {renderContent()}
    </div>
  )
}

export default Resource;