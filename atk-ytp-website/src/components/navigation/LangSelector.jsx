import { SegmentedControl, Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function LangSelector() {
  const { i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // You can adjust the threshold (768) to your specific breakpoint
    }

    // Initial check on component mount
    handleResize();

    // Add event listener to handle window resizing
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('selectedLanguage', lng);
  };

  return (
    <div className='pl-4'>
      {isMobile ? (
        <Button
        variant="subtle"
        
        size="md"
        radius="md"
        value={i18n.language}
        onClick={() => changeLanguage(i18n.language === 'fi' ? 'en' : 'fi')}
        className='text-white'
      >
        {i18n.language === 'fi' ? 'EN' : 'FI'}
        
      </Button>
      ) : (
        <SegmentedControl
          radius='xl'
          data={['fi', 'en']}
          value={i18n.language}
          onChange={(value) => changeLanguage(value)}
          className='uppercase'
        ></SegmentedControl>
      )}
    </div>
  );
}

export default LangSelector;
