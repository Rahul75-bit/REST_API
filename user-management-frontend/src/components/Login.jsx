import { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin123");

  const login = async () => {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;