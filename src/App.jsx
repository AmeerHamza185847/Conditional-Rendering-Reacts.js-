import { useState } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import './App.css';
import { Login } from './Components/LoggedIn/Login';
import { Logout } from './Components/LoggedOut/Logout';



function App() {

  const [userLoginState, setUserLoginState] = useState(true);
  const [btnText, setBtnText] = useState("Logout");
  let [isDark, setIsDark] = useState(false);

  let handleButtonState = () => {
    setBtnText("Login");
    setUserLoginState(!userLoginState);
  }

  let bgIconToggler = () => {
    setIsDark(!isDark);
  }

  return (

    <div className={`${(isDark) ? 'darkMode' : "whiteMode"}`}>

      {/* **************************************** */}

      <div>
        <button className='stateManger' onClick={handleButtonState}>{btnText}</button>
      </div>

      <div className='lightMode'>
        {
          (isDark) ? <MdOutlineLightMode className='light' onClick={bgIconToggler} />
            : <MdOutlineDarkMode className='dark' onClick={bgIconToggler} />
        }
      </div>
      {/* **************************************** */}
      {
        (userLoginState) ?
          <Login />
          : <Logout />
      }

    </div>
  )
}

export default App;
