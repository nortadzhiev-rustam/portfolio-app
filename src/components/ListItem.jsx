import React from 'react';
import { Paper, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'center',
    marginInline: 10,
  },
}));

const ListItem = (props) => {
  const classes = useStyles();
  
  return (
    <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-row justify-content-center align-items-center my-2'>
      <Paper elevation={10} className={classes.paper}>
        <div className='mx-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            fill='currentColor'
            className='bi bi-patch-check-fill'
            viewBox='0 0 16 16'
            color='#009688'
          >
            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z' />
          </svg>
        </div>
        <Typography variant='h5' component='p' color='initial'>
          {props.skillName}
        </Typography>
      </Paper>
    </div>
  );
};

export default ListItem;
