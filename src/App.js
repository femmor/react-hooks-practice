import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ showPassword, setShowPassword ] = useState(false)

  return (
    <div className="container">
        <h2>React Hooks Form</h2>
        <input 
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />

         <div className="passwordInput">
            <input 
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <span className="password-icon-text">{showPassword ? "hide password" : "show password"}</span>
            <span className="password-icon" onClick={(e) => setShowPassword(!showPassword)}><i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i></span>
         </div>

          <div className="info">
              <h3>Your Username is: {username}</h3>
              <h3>Your Password is: {
                showPassword ? password : "*".repeat(password.length)
              }</h3>
          </div>
      </div>
    )
}

export default App;
