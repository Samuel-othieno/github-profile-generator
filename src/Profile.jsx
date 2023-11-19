import React from "react";
import "./Profile.css";

function Profile({ userData }) {
  return (
    <div className="profile">
      <img src={userData.avatar_url} alt={userData.login} />
      <h2>
        <a href={userData.html_url} target="_blank" rel="noreferrer">
          {userData.login}
        </a>
      </h2>
      <div className="bio-data" >
        <p>
          <i className="fas fa-users"></i> <span>Followers</span><br />{userData.followers}
        </p>
        <p>
          <i className="fas fa-user-friends"></i> <span>Following</span><br />{userData.following}
        </p>
        <p>
          <i className="fas fa-code-branch"></i><span> Repositories</span><br />{userData.public_repos}
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> <span>Location</span><br />{userData.location || "Unknown"}
        </p>
        <p>
          <i className="fas fa-clock"></i><span> Joined</span><br />{new Date(userData.created_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default Profile;
