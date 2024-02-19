import React, { useState } from "react";
import axios from "axios";

import {useNavigate, Link } from "react-router-dom";

const Register = () => {

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/signup", {
        email,
        password,
      })
      .then(res=>{
        if(res.data=="exist"){
          alert("User already exist")
        }
        else if(res.data=="notexist"){
          history("/",{state:{id:email}})
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })
    } catch (e) {
      console.log("There is an error", e);
    }
  }

  return (
    <div>
      {" "}
      <div class="row">
        <div class="col-lg-7" style={{ marginLeft: "25%" }}>
          <div class="p-5">
            <div class="text-center">
              <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
            </div>
            <form class="user">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control form-control-user"
                  id="exampleInputEmail"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <input
                    type="password"
                    class="form-control form-control-user"
                    id="exampleInputPassword"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div class="col-sm-6">
                  <input
                    type="password"
                    class="form-control form-control-user"
                    id="exampleRepeatPassword"
                    placeholder="Repeat Password"
                  />
                </div>
              </div>
              <a
                href="login.html"
                class="btn btn-primary btn-user btn-block"
                type="submit"
                onClick={submit}
              >
                Register Account
              </a>
              <hr />
              <a href="index.html" class="btn btn-google btn-user btn-block">
                <i class="fab fa-google fa-fw"></i> Register with Google
              </a>
              <a href="index.html" class="btn btn-facebook btn-user btn-block">
                <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
              </a>
            </form>
            <hr />
            <div class="text-center">
              <a class="small" href="forgot-password.html">
                Forgot Password?
              </a>
            </div>
            <div class="text-center">
              <Link class="small" to="/login">
                Already have an account? Login!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
