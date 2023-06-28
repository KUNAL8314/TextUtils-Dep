
import { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils Light Mode";
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#1b2024';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils Dark Mode";
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the Text To analyze below" mode={mode} showAlert={showAlert} />
      <About /> */}
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the Text To analyze below" mode={mode} showAlert={showAlert} />}></Route>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

