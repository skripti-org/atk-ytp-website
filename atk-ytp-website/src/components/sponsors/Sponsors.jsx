import { createStyles, Image, Container, AspectRatio, Grid, Card } from '@mantine/core';
import PageSection from '../layout/PageSection';

import sitowise from '../../../assets/logos/sitowise.png';
import solita from '../../../assets/logos/solita.png';
import siili from '../../../assets/logos/siili.png';
import mimmitKoodaa from '../../../assets/logos/mimmit-koodaa.svg';
import tek from '../../../assets/logos/TEK.png';
import koeda from '../../../assets/logos/koeda2.png';
import sensire from '../../../assets/logos/sensire.png';
import celsius from '../../../assets/logos/celsius2.webp';
import { useTranslation } from 'react-i18next';

const sponsors = [
  {
    title: 'Siili',
    image: siili,
    link: 'https://www.siili.com/fi/',
  },
  {
    title: 'Solita',
    image: solita,
    link: 'https://www.solita.fi/',
  },
  {
    title: 'Sitowise',
    image: sitowise,
    link: 'https://www.sitowise.com/fi',
  },
  {
    title: 'Mimmit koodaa',
    image: mimmitKoodaa,
    link: 'https://mimmitkoodaa.fi/',
  },
  {
    title: 'TEK',
    image: tek,
    link: 'https://www.tek.fi/fi',
  },
  {
    title: 'Koeda Consulting',
    image: koeda,
    link: 'https://www.koeda.fi',
  },
  {
    title: 'Sensire',
    image: sensire,
    link: 'https://www.sensire.com/fi/',
  },
  {
    title: 'Celsius Suomi',
    image: celsius,
    link: 'https://celsiussuomi.fi/',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    background: theme.colors.dark[9],
    border: '1px solid white',
  },
}));

export default function SponsorGrid() {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const cards = sponsors.map((sponsor) => (
    <Grid.Col span={6} xs={4} sm={3} key={sponsor.title}>
      <Card className={classes.card} p='md' radius={0} component='a' href={sponsor.link}>
        <AspectRatio ratio={1} className='brightness-0 invert'>
          <Image src={sponsor.image} alt={sponsor.title + ' logo'} />
        </AspectRatio>
      </Card>
    </Grid.Col>
  ));

  return (
    <div id='yhteistyokumppanit'>
      <PageSection title={t('common.partners')}>
        <Container>
          <Grid gutter='xs'>{cards}</Grid>
        </Container>
      </PageSection>
    </div>
  );
}
