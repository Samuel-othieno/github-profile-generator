import { useState, useEffect } from "react";
import "./App.css";
import InputForm from "./InputForm";
import Profile from "./Profile";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
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
  };

  const profileData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <div className={`App ${theme}`}>
      <button id="theme" onClick={toggleTheme}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
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
        <footer className="footer">
                <p>Created by Samuel Othieno</p>
            </footer>
      </div>
    </div>
  );
}

export default App;
