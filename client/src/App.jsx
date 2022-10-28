import { useState } from "react";
import { Login, Register, Board } from "./components";
import "./App.css";

function App() {
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const showLoginForm = (e) => {
    setLoginForm((current) => !current);
    setClicked(true);
  };

  const showRegisterForm = (e) => {
    setRegisterForm((current) => !current);
    setClicked(true);
  };

  return (
    <div>
      <h1>Dear Diary</h1>
      <div className="btns">
        <button onClick={showLoginForm} className={clicked ? "btn-clicked" : ""}>
          Login
        </button>
        {loginForm && (
          <Login passwordText={passwordText} setPasswordText={setPasswordText} usernameText={usernameText} setUsernameText={setUsernameText} />
        )}
        <button onClick={showRegisterForm} className={clicked ? "btn-clicked" : ""}>
          Register
        </button>
        {registerForm && (
          <Register usernameText={usernameText} setUsernameText={setUsernameText} passwordText={passwordText} setPasswordText={setPasswordText} />
        )}
      </div>
    </div>
  );
}

export default App;
