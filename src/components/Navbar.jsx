import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useScrollTrigger, Slide, ClickAwayListener } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import { sections } from '../constants/data';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  offset: theme.mixins.toolbar,
  hide: {
    display: 'none',
  },

  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.type === 'dark' ? '#263238' : '#0091ea',
  },

  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.type === 'dark' ? '#263238' : '#0091ea',
  },

  menuButton: {
    marginRight: 36,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef(null);
  const { width } = props;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const handleClick = (id) => {
    window.location.href = `#${id}`;
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              ref={anchorRef}
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Rustam's Portfolio
            </Typography>
            <IconButton
              aria-label='account of current user'
              aria-controls='primary-search-account-menu'
              color='inherit'
              className={classes.menuButton}
              onClick={() => props.changeMode()}
              edge='end'
            >
              {props.isDarkMode ? (
                <Brightness7 htmlColor='#c6ff00' />
              ) : (
                <Brightness4 htmlColor='#ffc107' />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ClickAwayListener onClickAway={handleClose}>
        <Drawer
          elevation={20}
          variant='permanent'
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          onMouseEnter={handleDrawerOpen}
        >
          <div className={classes.drawerHeader}>
            <IconButton
              style={{ marginRight: width > 599 ? 5 : -3 }}
              onClick={handleDrawerClose}
            >
              {theme.direction === 'ltr' && open ? (
                <ChevronLeftIcon htmlColor='white' />
              ) : (
                <MenuIcon htmlColor='white' />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {sections.map((item, index) => (
              <div onClick={() => handleClick(item.id)} key={index}>
                <ListItem divider button>
                  <div style={{ marginLeft: width > 599 ? 8 : 0 }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                  </div>
                  <ListItemText primary={item.title} />
                </ListItem>
              </div>
            ))}
          </List>
        </Drawer>
      </ClickAwayListener>
      <div className={classes.offset}></div>
    </div>
  );
}

export default Navbar;
