const yourDate = new Date("2020-08-11T00:00:26");
const music = ['canloi', 'viem', 'tinhanh'];

// Utility functions
const formatNumber = (num) => num > 9 ? num : "0" + num;
const formatDate = (date) => {
  const day = formatNumber(date.getDate());
  const month = formatNumber(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const calculateTimeDifference = () => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - yourDate) / 1000);
  
  const days = Math.floor(diffInSeconds / (60 * 60 * 24));
  const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
  const seconds = diffInSeconds % 60;
  
  return { days, hours, minutes, seconds };
};

const updateClock = () => {
  const { days, hours, minutes, seconds } = calculateTimeDifference();
  
  const dateElement = document.querySelector("date");
  const timeElement = document.querySelector("time");
  
  if (dateElement) {
    dateElement.textContent = `${days} DAYS`;
  }
  
  if (timeElement) {
    timeElement.textContent = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
  }
};

const initializeMusic = () => {
  const audioElement = document.querySelector("audio");
  if (audioElement && music.length > 0) {
    const randomSong = music[Math.floor(Math.random() * music.length)];
    audioElement.setAttribute("src", `music/${randomSong}.mp3`);
    
    // Try to autoplay music
    const playMusic = async () => {
      try {
        // Unmute and play
        audioElement.muted = false;
        await audioElement.play();
        console.log('Music started automatically');
      } catch (error) {
        console.log('Autoplay blocked by browser, user interaction required');
        // Show a play button or message to user
        showPlayButton();
      }
    };
    
    // Try to play when audio is loaded
    audioElement.addEventListener('canplaythrough', playMusic, { once: true });
    
    // Handle audio loading errors gracefully
    audioElement.addEventListener('error', () => {
      console.log('Audio file not found, continuing without music');
    });
  }
};

const showPlayButton = () => {
  const musicContainer = document.getElementById('music');
  if (musicContainer) {
    const playButton = document.createElement('button');
    playButton.innerHTML = '🎵 Phát nhạc';
    playButton.style.cssText = `
      position: absolute;
      top: -40px;
      left: 0;
      background: rgba(255, 255, 255, 0.9);
      border: none;
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      font-size: 14px;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    `;
    
    playButton.addEventListener('click', async () => {
      const audio = document.querySelector('audio');
      if (audio) {
        try {
          audio.muted = false;
          await audio.play();
          playButton.remove();
        } catch (error) {
          console.log('Failed to play music:', error);
        }
      }
    });
    
    playButton.addEventListener('mouseenter', () => {
      playButton.style.background = 'rgba(255, 255, 255, 1)';
      playButton.style.transform = 'scale(1.05)';
    });
    
    playButton.addEventListener('mouseleave', () => {
      playButton.style.background = 'rgba(255, 255, 255, 0.9)';
      playButton.style.transform = 'scale(1)';
    });
    
    musicContainer.appendChild(playButton);
  }
};
const addLoadingAnimation = () => {
  const wrapper = document.getElementById('wrapper');
  if (wrapper) {
    wrapper.style.opacity = '0';
    wrapper.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      wrapper.style.transition = 'all 1s ease-out';
      wrapper.style.opacity = '1';
      wrapper.style.transform = 'translateY(0)';
    }, 100);
  }
};

const addHeartAnimation = () => {
  const heart = document.getElementById('heart');
  if (heart) {
    heart.addEventListener('click', () => {
      heart.style.animation = 'none';
      setTimeout(() => {
        heart.style.animation = 'heartbeat 0.5s ease-in-out 3';
      }, 10);
    });
  }
};

const addImageHoverEffects = () => {
  const avatars = document.querySelectorAll('.avt');
  avatars.forEach(avatar => {
    avatar.addEventListener('mouseenter', () => {
      avatar.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    avatar.addEventListener('mouseleave', () => {
      avatar.style.transform = 'scale(1) rotate(0deg)';
    });
  });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set anniversary date
  const anniElement = document.querySelector("anni");
  if (anniElement) {
    anniElement.textContent = formatDate(yourDate);
  }
  
  // Initialize clock
  updateClock();
  const timer = setInterval(updateClock, 1000);
  
  // Initialize music
  initializeMusic();
  
  // Try to enable autoplay on first user interaction
  const enableAutoplayOnInteraction = async () => {
    const audio = document.querySelector('audio');
    if (audio && audio.paused) {
      try {
        audio.muted = false;
        await audio.play();
        // Remove event listeners after successful play
        document.removeEventListener('click', enableAutoplayOnInteraction);
        document.removeEventListener('keydown', enableAutoplayOnInteraction);
        document.removeEventListener('touchstart', enableAutoplayOnInteraction);
      } catch (error) {
        console.log('Still cannot autoplay:', error);
      }
    }
  };
  
  // Add event listeners for user interaction
  document.addEventListener('click', enableAutoplayOnInteraction, { once: true });
  document.addEventListener('keydown', enableAutoplayOnInteraction, { once: true });
  document.addEventListener('touchstart', enableAutoplayOnInteraction, { once: true });
  
  // Add animations and effects
  addLoadingAnimation();
  addHeartAnimation();
  addImageHoverEffects();
  
  // Add click effect to clock
  const clockElement = document.getElementById('clock');
  if (clockElement) {
    clockElement.addEventListener('click', () => {
      clockElement.style.transform = 'scale(0.95)';
      setTimeout(() => {
        clockElement.style.transform = 'scale(1)';
      }, 150);
    });
  }
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Handle visibility change to pause/resume timer
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(timer);
    } else {
      updateClock();
      setInterval(updateClock, 1000);
    }
  });
  
  console.log('Love Days website initialized successfully! 💕');
}, false);

// Handle window resize
window.addEventListener('resize', () => {
  // Recalculate any responsive elements if needed
  updateClock();
});

// Add some fun easter eggs
document.addEventListener('keydown', (e) => {
  // Press 'L' for love animation
  if (e.key.toLowerCase() === 'l') {
    const heart = document.getElementById('heart');
    if (heart) {
      heart.style.animation = 'heartbeat 0.3s ease-in-out 5';
    }
  }
  
  // Press 'M' to toggle music
  if (e.key.toLowerCase() === 'm') {
    const audio = document.querySelector('audio');
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
});