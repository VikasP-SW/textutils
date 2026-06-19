// ===== Router Code (Future Use) =====
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTheme('#212529');

      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';

      document.title = 'TextUtils - Dark Mode';

      showAlert('Dark Mode Enabled', 'success');
    } else {
      setMode('light');
      setTheme('white');

      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      document.title = 'TextUtils - Light Mode';

      showAlert('Light Mode Enabled', 'success');
    }
  };

  const setThemeColor = (color) => {
    setTheme(color);

    document.body.style.backgroundColor = color;

    if (
      color === '#86efac' || // Mint
      color === '#fdba74' || // Peach
      color === '#7dd3fc' || // Sky
      color === 'white'
    ) {
      document.body.style.color = 'black';
    } else {
      document.body.style.color = 'white';
    }

    // Browser Tab Title
    if (color === '#fb7185') {
      document.title = 'TextUtils - Rose Theme';
    } else if (color === '#f9a8d4') {
      document.title = 'TextUtils - Pink Theme';
    } else if (color === '#7dd3fc') {
      document.title = 'TextUtils - Sky Theme';
    } else if (color === '#c084fc') {
      document.title = 'TextUtils - Purple Theme';
    } else if (color === '#86efac') {
      document.title = 'TextUtils - Mint Theme';
    } else if (color === '#fdba74') {
      document.title = 'TextUtils - Peach Theme';
    }

    showAlert('Theme Enabled', 'success');
  };


return (
  <>
    <Navbar
      title="TextUtils"
      mode={mode}
      theme={theme}
      toggleMode={toggleMode}
      setThemeColor={setThemeColor}
    />

    <Alert alert={alert} />

    <div className="container my-3">
      <TextForm
        heading="Enter The Text To Analyze Below"
        mode={mode}
        theme={theme}
        showAlert={showAlert}
      />
    </div>

    {/*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    */}
  </>
);
}

export default App;