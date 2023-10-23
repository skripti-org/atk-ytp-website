import { Container, Highlight, Text, Title, createStyles } from '@mantine/core';
import YoutubeEmbed from './Youtube';
import { useTranslation } from 'react-i18next';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: '3rem',
    marginBottom: '3rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
  },
  title: {
    marginBottom: theme.spacing.xl,
    textAlign: 'center',
  },
}));

export default function Main() {
  const { classes } = useStyles();
  const { t } = useTranslation();
  return (
    <Container className={classes.wrapper}>
      <Title order={2} pt={20} pb={20} className={classes.title}>
        <Text className='text-xl text-gray-300' fw={900}>
          Kiitos kaikille tapahtumaan osallistuneille! ATK-YTP palaa jälleen ensi vuonna, silloin
          kohteena on Jyväskylä!
        </Text>
      </Title>

      <Title order={2} pt={20} pb={20} className={classes.title}>
        <Text className='text-5xl text-gray-300' fw={900}>
          Ah shit,
          <br /> here we go again
        </Text>
      </Title>

      <Text size='md'>
        <Highlight highlight={['18.-20.10.2023', 'Skripti ry']} className='p-2'>
          {t('intro.part1')}
        </Highlight>
      </Text>

      <Text size='md'>
        <Highlight highlight={['C1-salissa', 'C1 Hall']} className='p-2'>
          {t('intro.part2')}
        </Highlight>
      </Text>

      <YoutubeEmbed />
    </Container>
  );
}
