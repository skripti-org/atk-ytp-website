import { Button, Container, createStyles } from '@mantine/core';
import {
  IconCalendar,
  IconMap,
  IconMessageCircleQuestion,
  IconMovie,
  IconTicket,
} from '@tabler/icons-react';
import Counter from './Counter';
import logo from '../../../assets/logos/logo.png';
import logoWebp from '../../../assets/logos/logo.webp';
import Circle from './Circle';
import { useTranslation } from 'react-i18next';

const useStyles = createStyles(() => ({
  heroBtn: {
    margin: '5px',
  },
}));

const Hero = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <section className='relative flex min-h-[calc(100vh-59px)] flex-col justify-center'>
      <div className='relative flex flex-1 flex-col items-center justify-end'>
        <div className='container relative mx-auto flex w-full flex-col justify-center px-8 py-2'>
          <Container className='relative flex flex-col text-center xl:max-w-2xl'>
            <picture>
              <source srcSet={logoWebp} type='image/webp' className='max-w-full' />
              <img className='max-w-full' src={logo} alt='ATK-YTP logo' />
            </picture>
            <Circle />
            <h1 className='font-outline-2-subtitle font-sans text-2xl sm:text-3xl'>
              18.-20.10.2023
            </h1>
          </Container>
        </div>

        <Container className='px-8 text-center'>
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
            {t('common.schedule')}
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
            {t('common.trailer')}
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
            {t('common.map')}
          </Button>
          <Button
            sx={classes.heroBtn}
            color='kide'
            radius='xl'
            component='a'
            href='https://kide.app/fi/events/dbb84356-62ad-411a-b0e0-237837b32f05'
            target='_blank'
            rightIcon={<IconTicket />}
            styles={() => ({
              root: {
                color: 'white',
              },
            })}
          >
            {t('common.tickets')}
          </Button>
          <Button
            sx={classes.heroBtn}
            color='pink'
            radius='xl'
            component='a'
            href='https://presemo.uef.fi/ytp/'
            target='_blank'
            rightIcon={<IconMessageCircleQuestion />}
            styles={() => ({
              root: {
                color: 'white',
              },
            })}
          >
            Presemo
          </Button>
        </Container>
      </div>
      <Container className='flex flex-1 items-center justify-center p-8'>
        <Counter targetDate={new Date('2023-10-18T07:00:00Z').getTime()} />
      </Container>
    </section>
  );
};

export default Hero;
