import React, { useEffect } from 'react';
import './value.css';

const Value = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop observing the element after it has been shown
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el)); // Stop observing all elements when the component unmounts
    };
  }, []);

  return (
    <div className="guur__header-footer">
      <div className="guur__header-content__button hidden">
        <button type="button">
          <a href='#cta'>Los geht's</a>
        </button>
      </div>
    </div>
  );
};

export default Value;
