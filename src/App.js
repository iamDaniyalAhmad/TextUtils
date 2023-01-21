// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() { 
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#023770";
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  };
  return (
    <>
    <Navbar title="TextUtils" about="About" mode={mode} toggle={toggle} />
    <Alert alert={alert} />
    <TextForm heading="TextUtils - Enter the text" mode={mode} showAlert={showAlert}/>
      {/* <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text" mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/About" element={<About/>}/>
    </Routes>
    </Router> */}

    </>
  );
}

export default App;
