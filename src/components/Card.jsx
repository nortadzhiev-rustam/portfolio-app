import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import {  PlayCircleOutline } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: '10%',
  },
  media: {
    height: 200,
    contain: 'cover',
  },
  cardContent: {
    textAlign: 'start',
  },
  link: {
    '&:hover': {
      color: 'inherit',
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function CardItem(props) {
  const { title, image, link, description } = props.item;
  const classes = useStyles();

  return (
    <div className='col-12 col-xl-4 col-md-6 col-sm-12 col-xs-12'>
      <Card className={classes.root} elevation={15}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title='Project' />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className={classes.link}
            href={link}
            variant='outlined'
            size='small'
          >
            Go to &nbsp;&nbsp; <PlayCircleOutline />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
