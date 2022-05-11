import React from "react";
import "./home.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; 


const Home = () => {
  const { setToken } = useContext(AuthContext);

  const handleLogOut = () => {
    setToken(false)
  }
  return (
    <>
      <div className="container">
        <h1 className="home__heading">Home</h1>
        <button className="btn btn-secondary" onClick={handleLogOut}>Log out</button>
      </div>
    </>
  );
};

export default Home;
