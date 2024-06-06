import { useState } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import './App.css';
import { Login } from './Components/LoggedIn/Login';
import { Logout } from './Components/LoggedOut/Logout';



function App() {

  const [userLoginState, setUserLoginState] = useState(true);
  let [btnText, setBtnText] = useState("Logout");
  let [isDark, setIsDark] = useState(false);

  let handleButtonState = () => {
    if(btnText === 'Logout'){
      // setBtnText('Login');
      //OR
      setBtnText(btnText='Login');
    }
    else{
      // setBtnText("Logout");
      //OR
      setBtnText(btnText='Logout');
    }
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
