import { useState } from "react";
import Login from "./components/Login";
import AdminUsers from "./components/AdminUsers";
import CreateUser from "./components/CreateUser";
import UserProfile from "./components/UserProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <h1>User Management System</h1>
      <p>Spring Boot JWT Authentication Frontend</p>

      <Login setIsLoggedIn={setIsLoggedIn} />

      {isLoggedIn && (
        <>
          <CreateUser />
          <AdminUsers />
          <UserProfile />
        </>
      )}
    </div>
  );
}

export default App;