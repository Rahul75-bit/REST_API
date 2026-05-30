import { useState } from "react";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8080/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      alert("User created successfully");
      setName("");
      setEmail("");
      setPassword("");
    } else {
      alert("User creation failed");
    }
  };

  return (
    <div className="card">
      <h2>Create User</h2>

      <input
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={createUser}>Create User</button>
    </div>
  );
}

export default CreateUser;