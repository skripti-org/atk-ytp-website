import React from 'react';
import { Button, Container, createStyles } from '@mantine/core';
import { IconCalendar, IconMap, IconMovie } from '@tabler/icons-react';
import Counter from './Counter';
import logo from '../../../assets/logos/logo.png';
import logoWebp from '../../../assets/logos/logo.webp';
import BgCanvas from './Canvas';

const useStyles = createStyles(() => ({
  heroBtn: {
    margin: '5px',
  },
}));

const Hero = () => {
  const { classes } = useStyles();
  return (
    <section className='relative grid min-h-[calc(100dvh-59px)]'>
      <BgCanvas />
      <div className='container mx-auto flex flex-col justify-center p-8'>
        <Container className='relative flex flex-col text-center lg:max-w-md xl:max-w-lg'>
          <picture>
            <source srcSet={logoWebp} type='image/webp' className='max-w-full' />
            <img className='max-w-full' src={logo} alt='ATK-YTP logo' />
          </picture>

          <h1 className='font-outline-2-subtitle font-sans text-2xl sm:text-3xl'>18.-20.10.2023</h1>
        </Container>
      </div>

      <Container className='p-8 text-center'>
        <Button
          sx={classes.heroBtn}
          color='triangle-yellow'
          radius='xl'
          component='a'
          href='#aikataulu'
          rightIcon={<IconCalendar />}
          styles={() => ({
            root: {
              color: 'black',
            },
          })}
        >
          Aikataulu
        </Button>
        <Button
          sx={classes.heroBtn}
          color='pink'
          radius='xl'
          component='a'
          href='#traileri'
          rightIcon={<IconMovie />}
          styles={() => ({
            root: {
              color: 'white',
            },
          })}
        >
          Traileri
        </Button>
        <Button
          sx={classes.heroBtn}
          color='triangle-yellow'
          radius='xl'
          component='a'
          href='#kartta'
          rightIcon={<IconMap />}
          styles={() => ({
            root: {
              color: 'black',
            },
          })}
        >
          Kartta
        </Button>
      </Container>
      <Container className='flex items-center justify-center p-8'>
        <Counter targetDate={new Date('2023-10-18T10:00:00Z').getTime()} />
      </Container>
    </section>
  );
};

export default Hero;
