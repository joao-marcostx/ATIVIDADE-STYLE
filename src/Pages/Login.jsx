import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="login">
        <form
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            margin: "0px",
            paddingTop: "",
            gap: "1em",
            height: "",
          }}
        >
          <input type="email" placeholder="Email" className="pp"></input>
          <input type="password" placeholder="senha" className="pp"></input>
          <Link to="/Home">
          <button type="submit"  
            style={{
              backgroundColor: "blue",
              color: "white",
              border: "solid 0px",
              height: "30px",
              width: "80px",
              borderRadius: "20px",
              alignItems: "center",
            }}
          >
            Login
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
