import { useNavigate } from 'react-router-dom';

const SmoothScrollAnchor = ({ targetId, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      let offsetTop = targetElement.offsetTop - 150;

      // Adjust scroll position based on device screen size
      if (window.innerWidth <= 768) {
        // Mobile devices
        offsetTop = targetElement.offsetTop - 100; // Adjust as needed
      }

      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    } else if (targetId === 'services' || targetId === 'owner' || targetId === 'reason') {
      navigate('/');

      // Get the window height and scroll down by a specific amount
      const scrollOffset = getScrollOffsetForDevice(targetId);
      setTimeout(() => {
        window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
      }, 300);
    }
  };

  const getScrollOffsetForDevice = (targetId) => {
    // Define specific scroll offsets for different targets and devices
    const scrollOffsets = {
      services: 1000,
      owner: 2500,
      reason: 2500,
    };

    // Adjust the offset based on device screen size
    if (window.innerWidth <= 768) {
      // Mobile devices
      if (targetId === 'services') {
      return scrollOffsets[targetId] + 0; // Adjust as needed
    } else if (targetId === 'owner') {
      return scrollOffsets[targetId] + 1200; // Adjust as needed
    } else {
      return scrollOffsets[targetId] + 800;
    }
    } else {
      // Desktop devices
      return scrollOffsets[targetId];
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollAnchor;
