import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default function Contact({ width }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Message sent!'))
      .catch((error) => alert(error));
  }

  return (
    <section
      id='contact'
      style={{
        margin: 20,
        paddingLeft: width > 599 ? 70 : 60,
        height: width > 800 ? 1000 : 700,
      }}
    >
      <Paper elevation={10} style={{ padding: 30, height: '100%' }}>
        <div className='row'>
          <div className='col-12 col-xl-8 col-lg-8 col-md-12 col-sm-12 position-relative'>
            <Paper elevation={10}>
              <iframe
                width='100%'
                height={width > 800 ? '940' : '640'}
                title='map'
                className='rounded-3'
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: 'opacity(0.7)' }}
                src='https://www.google.com/maps/embed/v1/place?q=Kilamba%20X41&key=AIzaSyBcxI1RDJl1yMfMdTWU1cjRNlsRbfBYX7U'
              />

              <div
                className={`position-absolute bg-dark p-4 rounded-3 ${
                  width > 1400 ? 'w-50' : 'w-75'
                }`}
                style={{ bottom: 50, left: 50 }}
              >
                <div className='row'>
                  <div className='col-6'>
                    <h4 className='text-white'>ADDRESS</h4>
                    <p className='mt-1 text-white'>
                      Kilamba X41 Apt.71 <br />
                      Luanda, Angola
                    </p>
                  </div>
                  <div className='col-6'>
                    <h4 className='text-white'>EMAIL</h4>
                    <a
                      href='mailto: rustamnortojiyev@gmail.com'
                      className='text-white pointer-event text-decoration-none'
                    >
                      rustamnortojiyev@gmail.com
                    </a>
                    <h4 className='mt-2 text-white'>PHONE</h4>
                    <p className='text-white'>(+244)941-491-987</p>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
          <div className='col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12'>
            <Paper className='h-100 p-4 pt-5' elevation={10}>
              <form
                className='d-flex flex-column'
                netlify
                name='contact'
                onSubmit={handleSubmit}
              >
                <h2 className='mb-5'>Hire me!</h2>
                <p className='mb-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora sint nostrum praesentium, vel optio autem accusamus.
                  Ratione quasi fuga in quis aspernatur, perspiciatis error
                  sapiente, amet repellat adipisci expedita delectus!
                </p>
                <TextField
                  className='mb-5'
                  id='name'
                  type='text'
                  name='name'
                  label='Name'
                  variant='filled'
                />
                <TextField
                  className='mb-5'
                  id='email'
                  type='email'
                  name='email'
                  label='Email'
                  variant='filled'
                />

                <TextField
                  className='mb-5'
                  id='message'
                  type='text'
                  name='message'
                  label='Message'
                  variant='filled'
                  multiline
                  rows={8}
                />
                <Button type='submit' variant='contained' size='large' color='primary'>
                  Submit
                </Button>
              </form>
            </Paper>
          </div>
        </div>
      </Paper>
    </section>
  );
}
