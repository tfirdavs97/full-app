import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import UserSingle from "./pages/UserSingle/UserSingle";
import Error from "./pages/Error/Error";
import { ThemeContext } from "./context/theme-context";
import { useContext } from "react";

const Private = () => {
  const { theme } = useContext(ThemeContext);
  

  return (
    <>
      <Header />

      <div className={theme}>
        <div className="routes__wrapper">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/user/:id" element={<UserSingle />} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Private;
