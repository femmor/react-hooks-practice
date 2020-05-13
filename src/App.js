import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [ userName, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ showPassword, setShowPassword ] = useState(false)

  return (
    <div className="container">
        <input 
          type="text"
          placeholder="Enter Username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h2>{userName}</h2>
        <h2>{showPassword ? password : "*".repeat(password.length)}</h2>
        <button onClick={(e) => setShowPassword(!showPassword)}>{showPassword ? "Hide Password" : "Show Password"}</button>
    </div>
  )
}

export default App;
