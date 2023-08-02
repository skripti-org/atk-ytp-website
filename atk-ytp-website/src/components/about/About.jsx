import { useEffect, useState, React } from 'react';
import './About.scss';
import Message from './Message';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Message msg={'Kunnon kusipaskakännit vaan vetoja'} writer={'Random Guy'} />,
    <Message msg={'Nautin Joensuusta'} writer={'Kolmiojäbä'} />,
    <Message msg={'On aikaa ja evästä'} writer={'T. Callahan'} />,
    <Message msg={'Joka helpolla tulee, se helpolla mänee'} writer={'Hank Moody'} />,
  ];

  const delay = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const styles = {
    slide: {
      position: 'absolute',
      width: '100%',
      transition: 'left 500ms',
    },
  };

  return (
    <div className='slideshow-container'>
      <div className='slide-container'>
        {slides.map((slide, index) => (
          <div
            className='slide'
            key={slide}
            style={{
              ...styles.slide,
              left: index === currentSlide ? 0 : '-300%',
            }}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className='slideshowDots'>
        {slides.map((_, idx) => (
          <div
            key={_}
            className={`slideshowDot${currentSlide === idx ? ' active' : ''}`}
            onClick={() => {
              setCurrentSlide(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default About;
