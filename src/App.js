import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import{Routes, Route, Link} from 'react-router-dom'
function App() {
  const [mode, setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
   <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="about" element={<About />} />
      </Routes>
        {/* <Routes>
          <Route path="/about">
            element={<About/>}
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode}/>
          </Route>
        </Routes> */}
      </div>
   </>
  );
}

export default App;
