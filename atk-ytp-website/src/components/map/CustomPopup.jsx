import { Button, Text } from '@mantine/core';

const showInMapClicked = (coordinates) => {
  window.open('https://maps.google.com?q=' + coordinates);
};

export default function CustomPopup({ label, info, coordinates }) {
  return (
    <div className='h-auto w-full p-1'>
      <Text size='md' className='mb-1 font-bold'>
        {label}
      </Text>
      <Text size='sm' lineClamp={5}>
        {info}
      </Text>
      <div className='mt-2'>
        <Button
          variant='outline'
          radius='md'
          size='small'
          onClick={() => showInMapClicked(coordinates)}
          className='p-1'
        >
          Avaa Google Mapsissa
        </Button>
      </div>
    </div>
  );
}
