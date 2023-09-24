import React from 'react';
import { Button, Container } from '@mantine/core';
import { IconArrowElbowRight } from '@tabler/icons-react';
import Counter from './Counter';
import logo from '../../../assets/logos/logo.png';

const Hero = () => {
  return (
    <section className='relative grid h-screen flex-col'>
      <div className='container mx-auto flex flex-col justify-center'>
        <Container className='relative flex flex-col text-center lg:max-w-md xl:max-w-lg'>
          <img src={logo} className='h-auto w-full' />

          <h1 className='font-outline-2-subtitle font-sans text-sm sm:text-3xl'>18.-20.10.2023</h1>
        </Container>
      </div>
      
      <Container color='black' className=''>
        <Button
          color='triangle-yellow'
          radius='xl'
          component='a'
          href='#aikataulu'
          rightIcon={<IconArrowElbowRight />}
          styles={() => ({
            root: {
              color: 'black',
            },
          })}
        >
          Ohjelma
        </Button>
      </Container>
      <Container className='flex items-center justify-center py-8'>
        <Counter targetDate={new Date('2023-10-18T10:00:00Z').getTime()} />
      </Container>
    </section>
  );
};

export default Hero;
