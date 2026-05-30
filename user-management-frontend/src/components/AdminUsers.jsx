import { useState } from "react";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [showButton, setShowButton] = useState(true);

  const getUsers = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8080/admin/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    setUsers(data);
    setShowButton(false);
  };

  const deleteUser = async (id) => {
    const token = localStorage.getItem("token");

    await fetch(`http://localhost:8080/admin/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("User deleted");
    getUsers();
  };

  return (
    <div className="card">
      <h2>All Users</h2>

      {showButton && <button onClick={getUsers}>Load Users</button>}

      <div className="users">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span>ID: {user.id}</span>

            <button className="delete" onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminUsers;