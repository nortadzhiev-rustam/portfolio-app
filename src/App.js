import React, { useState, useLayoutEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './containers/About';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Projects from './containers/Projects';
import Skills from './containers/Skils';
import Testimonials from './containers/Testimonials';
import Contact from './containers/Contact';
function useMediaQuery() {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
}

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [width] = useMediaQuery();
  React.useEffect(() => {
    const hours = () => {
      const date = new Date();
      if (date.getHours() > 18 || date.getHours() < 7) {
        setDarkMode((d) => !d);
        console.log(date.getHours());
      }
    };

    hours();
  }, []);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Navbar
          changeMode={changeDarkMode}
          isDarkMode={darkMode}
          width={width}
        />
        <About width={width} />
        <Projects width={width} />
        <Skills width={width} />
        {/* <Testimonials width={width} /> */}
        <Contact width={width} />
      </main>
    </ThemeProvider>
  );
}

export default App;
