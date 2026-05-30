import { useState } from "react";

function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [showButton, setShowButton] = useState(true);

  const getProfile = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8080/user/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    setProfile(data);
    setShowButton(false);
  };

  return (
    <div className="card">
      <h2>User Profile</h2>

      {showButton && (
        <button onClick={getProfile}>
          Get Profile
        </button>
      )}

      {profile && (
        <div className="profile">
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
          <span>ID: {profile.id}</span>
        </div>
      )}
    </div>
  );
}

export default UserProfile;