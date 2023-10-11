import { SegmentedControl } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

function LangSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <SegmentedControl
        radius='xl'
        data={['fi', 'en']}
        value={i18n.language}
        onChange={(value) => changeLanguage(value)}
        className='uppercase'
      ></SegmentedControl>
    </div>
  );
}

export default LangSelector;
