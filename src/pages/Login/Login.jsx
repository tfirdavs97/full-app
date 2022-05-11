import React, { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (evt) => {
    evt.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
      if(data.token) {
        setToken(data);
        navigate("/");
      }else{
        emailRef.current.style.border = "1px solid red"
        passwordRef.current.style.border = "1px solid red"
      }
      });
  };

  return (
    <>
      <div className="container">
        <h1 className="home__heading">Login</h1>

        <form className="w-50" onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              ref={passwordRef}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
