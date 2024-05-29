import React, { useState, useEffect } from 'react';
function About() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
    useEffect(() => {
      const videoElement = document.querySelector('.about-video');
      if (videoElement) {
        videoElement.play();
        setIsVideoPlaying(true);
      }
    }, []);
}
export default About;