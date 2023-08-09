import React from 'react';
import { Button, Container, Text } from '@mantine/core';
import { IconArrowElbowRight } from '@tabler/icons-react';
import Counter from './Counter';
const Hero = () => {
  return (
    <section className='h-[100vh] py-2'>
      <div className='container mx-auto flex flex-col justify-center py-12 lg:flex-row lg:justify-evenly xl:py-36'>
        <div className='flex flex-col justify-center rounded-sm p-6 text-left lg:max-w-md xl:max-w-lg'>
          <h1 className='m-0 font-sans text-5xl font-extrabold mix-blend-difference sm:text-9xl'>
            ATK YTP
          </h1>
          <h1 className='font-sans text-xs mix-blend-difference sm:text-3xl'>
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
      </div>
      <div className='xl:h-112 2xl:h-128 flex h-72 items-center justify-center sm:h-80 lg:mt-0 lg:h-3'>
        <Counter targetDate={new Date('2023-10-18T10:00:00Z').getTime()} />
      </div>
    </section>
  );
};

export default Hero;
