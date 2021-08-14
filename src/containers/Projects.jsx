import Paper from '@material-ui/core/Paper';
import React from 'react';
import { projects } from '../constants/data';
import CardItem from '../components/Card';


export default function Projects({width}) {
  
  return (
    <section id='projects' style={{ margin: 20, marginTop: 100, paddingLeft: width > 599 ? 70 : 60 }}>
      <Paper elevation={10} style={{ padding: 30 }}>
        <div className='container-fliud text-center '>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              fill='currentColor'
              className='bi bi-code-slash'
              viewBox='0 0 16 16'
            >
              <path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' />
            </svg>
            <h1 className='my-2'>Apps and Sites I've Built</h1>
          </div>
          <div className=' d-flex  flex-wrap'>
            {projects.map((project) => (
              <CardItem key={project.image} item={project} />
            ))}
          </div>
        </div>
      </Paper>
    </section>
  );
}
