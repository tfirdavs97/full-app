import React from "react";
import { useContext } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import { ThemeContext } from "./context/theme-context";

const Public = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />

      <div className={theme}>
        <div className="routes__wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <div className="container">
                  <Link className="btn btn-primary" to="/login">
                    Log in
                  </Link>
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Public;
