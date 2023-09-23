import { createStyles, Image, Container, AspectRatio, Grid, Card } from '@mantine/core';
import React from 'react';
import PageSection from '../layout/PageSection';

const sponsors = [
  {
    title: 'Siili',
    image: 'https://carner.com/wp-content/uploads/2022/10/siili-solutions-logo-822x618.png',
    link: '#',
  },
  {
    title: 'Nordea',
    image:
      'https://assets-global.website-files.com/5dd6b5c7f9822e5ea3513ede/5e67605ec608b56490db5dfa_nordea_logo.webp',
    link: '#',
  },
  {
    title: 'Solita',
    image: 'https://www.tietojohtajakilta.net/wp-content/uploads/2020/12/solita_logo-1024x239.png',
    link: '#',
  },
  {
    title: 'Sitowise',
    image: 'https://raw.githubusercontent.com/skripti-org/atk-ytp-website/v2/atk-ytp-website/public/sitowise.jpeg',
    link: '#',
  },
  {
    title: 'Mimmit koodaa',
    image: 'https://mimmitkoodaa.fi/wp-content/themes/mimmitkoodaa-2022/img/mimmit-koodaa-logo-white.svg',
    link: '#',
  },
  {
    title: 'TEK',
    image: 'https://raw.githubusercontent.com/skripti-org/atk-ytp-website/v2/atk-ytp-website/public/tek.jpeg',
    link: '#',
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
        <AspectRatio ratio={1}>
          <Image src={sponsor.image} />
        </AspectRatio>
      </Card>
    </Grid.Col>
  ));

  return (
    <div id="yhteistyokumppanit">
    <PageSection title='Yhteistyökumppanit'>
      <Container>
        <Grid gutter='xs'>{cards}</Grid>
      </Container>
    </PageSection>
    </div>
  );
}
