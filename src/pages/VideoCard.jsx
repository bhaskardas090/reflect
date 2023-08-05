import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/VideoCard.css';

const VideoCard = () => {
  const [videoData, setVideoData] = useState([]);

  const apiKey = 'AIzaSyA1hU1R2sSNUP6Mx3fnkRiTza8qoGD-E_s';

  useEffect(() => {
    const fetchMeditationVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=meditation&maxResults=5`
        );

        const videoData = response.data.items.map((item) => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.medium.url,
          };
        });

        setVideoData(videoData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchMeditationVideos();
  }, [apiKey]);

  return (
    <div className="custom-horizontal-card custom-video-card">
      {videoData.map((video, index) => (
        <a
          key={index}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={video.thumbnail} alt={video.title} />
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
      ))}
    </div>
  );
};

export default VideoCard;
