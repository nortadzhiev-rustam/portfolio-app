import React from 'react';
import { testimonials } from '../constants/data';
import { Paper } from '@material-ui/core';
import TestimonialCard from '../components/TesstimonialCard';
export default function Testimonials({ width }) {
  return (
    <section
      id='testimonials'
      style={{ margin: 20, marginTop: 100, paddingLeft: width > 599 ? 70 : 60 }}
    >
      <Paper elevation={10} style={{ padding: 30 }}>
        <div className='container-fluid text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            fill='currentColor'
            className='bi bi-people-fill'
            viewBox='0 0 16 16'
          >
            <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
            <path
              fillRule='evenodd'
              d='M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z'
            />
            <path d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
          </svg>
          <h1 className='sm:text-4xl text-3xl font-medium title-font  mb-12'>
            Client Testimonials
          </h1>
          <div className='d-flex flex-wrap'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} item={testimonial} />
            ))}
          </div>
        </div>
      </Paper>
    </section>
  );
}
