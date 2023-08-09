import React from 'react';
import { Button, Container, Text } from '@mantine/core';
import { IconArrowElbowRight } from '@tabler/icons-react';
import Counter from './Counter';
import BgCanvas from './Canvas';
const Hero = () => {
  return (
    <section className='grid h-[100vh] py-2'>
      <BgCanvas />

      <div className='container mx-auto flex flex-col justify-center py-20 lg:flex-row lg:justify-evenly xl:py-36'>
        <div className='flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-md xl:max-w-lg'>
          <span className='relative m-0 font-sans text-7xl font-extrabold sm:text-9xl'>
            ATK YTP
            <h1 className='font-outline-2 absolute left-0 right-0 top-16 -skew-y-6 font-serif text-6xl text-gray-100 underline underline-offset-8 sm:left-0 sm:right-0 sm:top-40 sm:text-7xl'>
              Joensuu city
            </h1>
          </span>

          <h1 className='font-sans text-sm mix-blend-difference sm:text-3xl mt-12'>
            18.-19.10.2023
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
      <div className='mb-16 flex items-center justify-center self-end px-4'>
        <Counter targetDate={new Date('2023-10-18T10:00:00Z').getTime()} />
      </div>
    </section>
  );
};

export default Hero;
