import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import HomePage from './Pages/HomePage';
import MoodTracker from './Pages/MoodTracker';
import Layout from './components/common/Layout';


const App = () => {

    const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );


  return (

     <ThemeProvider theme={theme}>
      <CssBaseline />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setDarkMode={setDarkMode} darkMode={darkMode} />}>
          <Route index element={<HomePage />} />
          <Route path="moodtracker" element={<MoodTracker />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}


export default App;
