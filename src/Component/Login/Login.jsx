import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "../../Captcha/react-captcha";

const Login = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [captcha, setCaptcha] = useState("");
  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(data))
    // props.Authenticated(data)
    setData(data)
    navigate('/')
    //  props.loding(data);
  };
  return (

    <div className="headingh">
      <div className="login ">
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="text_area">
            <input
              type="text"
              name="email"
              value={data.email}
              autoComplete="email"
              autoFocus
              onChange={handelChange}
              className="text_input"

            />
          </div>
          <div className="text_area">
            <input
              name="password"
              value={data.password}
              label="Password"
              type="password"
              id="password"
              onChange={handelChange}
              autoComplete="current-password"
              className="text_input"

            />
          </div>
        
          <input
            type="submit"
            value="LOGIN"
            className="btn"

          />
        </form>
        {/* <a className="link" href="/signup">Sign Up</a> */}
      </div>
    </div>
  );

};

export default Login;
