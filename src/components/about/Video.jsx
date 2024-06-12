import { useState, useEffect } from 'react';
function About() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    console.log(isVideoPlaying);
    useEffect(() => {
      const videoElement = document.querySelector('.about-video');
      if (videoElement) {
        videoElement.play();
        setIsVideoPlaying(true);
      }
    }, []);
}
export default About;