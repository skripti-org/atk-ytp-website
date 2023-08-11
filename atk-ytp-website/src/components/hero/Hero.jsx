import React from 'react';
import { Button, Container, Text } from '@mantine/core';
import { IconArrowElbowRight } from '@tabler/icons-react';
import Counter from './Counter';
import BgCanvas from './Canvas';
const Hero = () => {
  return (
    <section className='hero-grid-rows grid h-screen grid-cols-1'>
      <BgCanvas />

      <div className='container mx-auto flex flex-col justify-center py-8 lg:flex-row lg:justify-evenly xl:py-36'>
        <Container className='flex flex-col items-center justify-center rounded-sm text-center lg:max-w-md xl:max-w-lg'>
          <span className='relative m-0 font-sans text-7xl font-extrabold sm:text-9xl'>
            ATK YTP
            <h1 className='font-outline-2 absolute left-0 right-0 top-16 -skew-y-6 font-serif text-6xl text-gray-100 underline underline-offset-8 sm:left-0 sm:right-0 sm:top-40 sm:text-7xl'>
              Joensuu city
            </h1>
          </span>

          <h1 className='mt-12 font-sans text-sm sm:text-3xl'>18.-19.10.2023</h1>
        </Container>
      </div>
      <Container color='black' className='m-auto p-8'>
        <Button
          color='triangle-yellow'
          radius='xl'
          component='a'
          href='#info'
          rightIcon={<IconArrowElbowRight />}
          styles={(theme) => ({
            root: {
              color: 'black',
            },
          })}
        >
          Ohjelma
        </Button>
      </Container>
      <Container className='flex items-center justify-center px-4 py-8'>
        <Counter targetDate={new Date('2023-10-18T10:00:00Z').getTime()} />
      </Container>
    </section>
  );
};

export default Hero;
