import React from 'react';
import { Button, Container, Text } from '@mantine/core';
import { IconArrowElbowRight } from '@tabler/icons-react';
import Counter from './Counter';
const Hero = () => {
  return (
    <section className='py-2'>
      <div className='container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-evenly lg:py-24'>
        <div className='flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg'>
          <h1 className='font-sans text-5xl font-extrabold mix-blend-difference xl:text-9xl'>
            ATK-YTP
          </h1>
          <h1 className='font-sans text-xs mix-blend-difference xl:text-3xl'>
            18-19.10.2023
            <br />
            JOENSUU
          </h1>
          <Container color='black'>
            <Button
              color='triangle-yellow'
              radius='xl'
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
        </div>

        <div className='xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96'>
          <Counter targetDate={new Date('2023-10-18T10:00:00Z').getTime()} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
