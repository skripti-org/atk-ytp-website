import {
  createStyles,
  Header,
  Group,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      fontSize: '2rem',

      padding: '2rem',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),
    },
    ...theme.fn.hover({
      borderBottom: '1rem #E7FF50',
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,

    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box>
      <Header height={60} px='md' sx={{ backgroundColor: 'black', borderBottom: 0 }}>
        <Group position='apart' sx={{ height: '100%' }}>
          <a href='https://www.atk-ytp.org/' className='flex items-center'>
            <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
              <Text weight='800'>ATK-YTP &apos;23</Text>
            </span>
          </a>
          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <a href='#info' className={classes.link}>
              Info
            </a>
            <a href='#' className={classes.link}>
              Majoitus
            </a>
            <a href='#' className={classes.link}>
              Ohjelma
            </a>
            <a href='#' className={classes.link}>
              Jotain
            </a>
          </Group>
          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        title={
          <a href='https://www.atk-ytp.org/' className='flex items-center'>
            <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
              <Text weight='800'>ATK-YTP &apos;23</Text>
            </span>
          </a>
        }
        padding='md'
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx='-md'>
          <Divider my='sm' color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <a href='#' className={classes.link}>
            Info
          </a>
          <a href='#' className={classes.link}>
            Majoitus
          </a>
          <a href='#' className={classes.link}>
            Ohjelma
          </a>
          <a href='#' className={classes.link}>
            Jotain
          </a>

          <Divider my='sm' color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
