import { Container, Highlight, Text, Title, createStyles } from '@mantine/core';
import YoutubeEmbed from './Youtube';

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
  return (
    <Container className={classes.wrapper}>
      <Title order={2} pt={20} pb={20} className={classes.title}>
        <Text className='text-5xl text-gray-300' fw={900}>
          Ah shit,
          <br /> here we go again
        </Text>
      </Title>
      <Text size='md'>
        <Highlight highlight={['18.-20.10.2023', 'Skripti ry']} className='p-2'>
          ATK-YTP saapuu Joensuuhun! ATK-yhteistoimintapäivät, lyhyesti ATK-YTP, järjestetään tänä
          syksynä Joensuussa 18.-20.10.2023. Tämä kaksipäiväinen seminaaritapahtuma, joka on
          Tietotekniikan opiskelijoiden liiton (TiTOL) järjestämä, kokoaa vuosittain yhteen IT-alan
          opiskelijoita seitsemästä eri yliopistokaupungista. Tämän vuoden ATK-YTP isäntänä toimii
          Itä-Suomen yliopiston Joensuun kampuksen tietojenkäsittelijöiden ainejärjestö Skripti ry.
        </Highlight>
      </Text>
      <Text size='md'>
        <Highlight highlight={['C1-salissa']} className='p-2'>
          Yhteistoimintapäivät tarjoavat alan opiskelijoille ympäri Suomen mahdollisuuden tutustua
          toisiinsa sekä alan yrityksiin hauskalla tavalla. Tapahtumassa useat alan ammattilaiset
          pitävät vaikuttavia luentoja kahtena seminaaripäivänä. Luennot järjestetään Joensuun
          kampuksella C1-salissa 18. ja 19. lokakuuta klo 10-16, ja sen jälkeen voit verkostoitua
          iltaohjelman parissa. Lisäksi TiTOL pitää tapahtuman aikana syysliittokokouksensa.
          Tervetuloa Joensuuhun!
        </Highlight>
      </Text>

      <YoutubeEmbed />
    </Container>
  );
}
