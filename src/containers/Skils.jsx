import React from 'react';
import { skills } from '../constants/data';
import { Paper } from '@material-ui/core';
import ListItem from '../components/ListItem';
export default function Skills({ width }) {
  return (
    <section
      id='skills'
      style={{ margin: 20, marginTop: 100, paddingLeft: width > 599 ? 70 : 60 }}
    >
      <Paper elevation={10} style={{ padding: 30 }}>
        <div className='container-fluid'>
          <div className='text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              fill='currentColor'
              className='bi bi-cpu-fill'
              viewBox='0 0 16 16'
            >
              <path d='M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z' />
              <path d='M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z' />
            </svg>
            <h1>Skills &amp; Technologies</h1>
          </div>
          <div className='d-flex flex-wrap'>
            {skills.map((skill) => (
              <ListItem key={skill} skillName={skill} width={width} />
            ))}
          </div>
        </div>
      </Paper>
    </section>
  );
}
