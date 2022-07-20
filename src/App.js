import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark')
    }
    else{
      setMode ('light')
    }
  }
  return (
   <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <TextForm heading="Enter the Text to Analyze"/>
    {/* <About></About> */}
    </div>
   </>
  );
}

export default App;
