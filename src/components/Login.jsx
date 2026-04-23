import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../scss/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [users, setUsers] = useState([
    { email: "test@mail.com", password: "1234" }
  ]);

  const handleLogin = (e) => {
    e.preventDefault();

    const userExists = users.find(
      (u) => u.email === email && u.password === password
    );

    if (userExists) {
      setMessage("✅ Login succesfuldt!");
      localStorage.setItem("userEmail", email);
      setEmail("");
      setPassword("");
      setTimeout(() => navigate("/"), 800);
    } else {
      setMessage("❌ Forkert email eller password");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      setMessage("⚠️ Bruger findes allerede");
      return;
    }

    setUsers([...users, { email, password }]);
    setMessage("✅ Bruger oprettet!");
    setMode("login");
  };

  const handleSubmit = (e) => {
    if (mode === "login") {
      handleLogin(e);
    } else {
      handleRegister(e);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>{mode === "login" ? "Velkommen tilbage" : "Opret konto"}</h1>
          <p className="login-subtitle">
            {mode === "login" 
              ? "Log ind for at fortsætte" 
              : "Bliv medlem af vores fællesskab"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Adgangskode:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {mode === "login" && (
            <div className="forgot-password">
              <a href="#">Glemt adgangskode?</a>
            </div>
          )}

          <button type="submit" className="login-button">
            {mode === "login" ? "Log ind" : "Opret konto"}
          </button>
        </form>

        {message && <p className="login-message">{message}</p>}

        <div className="auth-switch">
          {mode === "login" ? (
            <p>
              Har du ikke en konto endnu? 
              <button 
                type="button"
                className="switch-btn"
                onClick={() => setMode("register")}
              >
                Opret en her
              </button>
            </p>
          ) : (
            <p>
              Har du allerede en konto? 
              <button 
                type="button"
                className="switch-btn"
                onClick={() => setMode("login")}
              >
                Log ind her
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;