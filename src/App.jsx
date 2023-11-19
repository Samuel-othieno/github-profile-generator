import React, { useState } from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa"
import InputForm from "./InputForm";
import Profile from "./Profile";


function profileData(username) {

  return fetch(`https://api.github.com/users/${username}`)
    .then((response) => {

      if (response.ok) {

        return response.json();
      } else {

        throw new Error(response.status);
      }
    })
    .catch((error) => {

      console.error(error);
      return null;
    });
}

function App() {

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  function handleChange(event) {

    setUsername(event.target.value);
  }


  async function handleSubmit(event) {

    event.preventDefault();

    setLoading(true);

    setError(null);

    setUserData(null);

    try {

      const data = await profileData(username);

      setUserData(data);
    } catch (error) {

      setError(error.message);
    } finally {

      setLoading(false);
    }
  }

  return ( 
    <div className="App ">

      <div className="SearchBar">
        <h1>Find Your Github Profile</h1>
        <InputForm
          username={username}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {userData && <Profile userData={userData} />}
      </div>
    </div>
  );
}

export default App;
