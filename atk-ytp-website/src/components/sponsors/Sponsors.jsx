import { createStyles, Image, Container, AspectRatio, Grid, Card } from '@mantine/core';
import PageSection from '../layout/PageSection';

import sitowise from '../../../assets/logos/sitowise.png';
import solita from '../../../assets/logos/solita.png';

const sponsors = [
  {
    title: 'Siili',
    image: 'https://carner.com/wp-content/uploads/2022/10/siili-solutions-logo-822x618.png',
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
    image:
      'https://mimmitkoodaa.fi/wp-content/themes/mimmitkoodaa-2022/img/mimmit-koodaa-logo-white.svg',
    link: 'https://mimmitkoodaa.fi/',
  },
  {
    title: 'TEK',
    image: 'https://www.tek.fi/sites/default/files/attachments/TEK_logo_RGB_RGB_valkoinen.png',
    link: 'https://www.tek.fi/fi',
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

  const cards = sponsors.map((sponsor) => (
    <Grid.Col span={6} xs={4} sm={3} key={sponsor.title}>
      <Card className={classes.card} p='md' radius={0} component='a' href={sponsor.link}>
        <AspectRatio ratio={1} className='brightness-200'>
          <Image src={sponsor.image} alt={sponsor.title + ' logo'} className='grayscale' />
        </AspectRatio>
      </Card>
    </Grid.Col>
  ));

  return (
    <div id='yhteistyokumppanit'>
      <PageSection title='Yhteistyökumppanit'>
        <Container>
          <Grid gutter='xs'>{cards}</Grid>
        </Container>
      </PageSection>
    </div>
  );
}
