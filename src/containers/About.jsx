import React from 'react';
import { Paper, useTheme } from '@material-ui/core';




export default function About({width}) {
  const theme = useTheme();
  return (
    
    <section id='about' style={{ margin: 20, paddingLeft: width > 599 ? 70 : 60 }}>
      
      <Paper elevation={10} style={{ padding: 30 }}>
        <div className=' d-flex flex-row-reverse flex-wrap align-center justify-space-around'>
          <div className='col-12 col-xl-6 col-md-6 col-sm-12 col-xs-12'>
            <img
              width='100%'
              alt='hero'
              src={
                theme.palette.type === 'dark'
                  ? '/assets/coding.png'
                  : '/assets/coding-light.png'
              }
            />
          </div>
          <div className='col-12 col-xl-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column align-items-start justify-content-center'>
            <h1 className=''>
              Hi, I'm Rustam.
              <br className='hidden lg:inline-block' />I love building amazing
              apps.
            </h1>
            <p className='mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
            </p>
            <div className='d-flex flex-row'>
              <a
                href='#contact'
                className={
                  theme.palette.type === 'light'
                    ? 'btn btn-md btn-warning mx-2 shadow'
                    : 'btn btn-md btn-info mx-2 shadow'
                }
              >
                <span style={{fontSize: 14}}>Work With Me</span>
              </a>
              <a
                href='#projects'
                className={
                  theme.palette.type === 'light'
                    ? 'btn btn-md btn-danger mx-2 shadow'
                    : 'btn btn-md btn-secondary mx-2 shadow'
                }
              >
                <span style={{fontSize: 14}}>See My Past Work</span>
              </a>
            </div>
          </div>
        </div>
      </Paper>
    </section>
  );
}
