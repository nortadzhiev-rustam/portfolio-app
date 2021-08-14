import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginInline: 10,
    padding: 20,
    maxHeight: '100%',
  },
}));
const TestimonialCard = (props) => {
    
  const classes = useStyles();
  return (
    <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex flex-row justify-content-center align-items-center my-4'>
      <Paper elevation={10} className={classes.paper}>
        <div className='d-flex justify-content-start align-items-start mb-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='currentColor'
            className='bi bi-terminal-fill '
            viewBox='0 0 16 16'
          >
            <path d='M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z' />
          </svg>
        </div>
        <p>{props.item.quote}</p>
        <div className='d-block rounded-circle'>
          <img
            width='80'
            style={{ borderRadius: '50%' }}
            src={props.item.image}
            alt='user'
          />
        </div>
        <h5>
          {props.item.name}
        </h5>
        <h6>
          {props.item.company}
        </h6>
      </Paper>
    </div>
  );
};

export default TestimonialCard;
