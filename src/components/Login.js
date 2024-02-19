import React, { useState } from "react";
import {useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { authh } from "./firebase/firebase";

const Login = () => {

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleGoogle = async (e) => { 
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(authh,provider);
}

  async function submit(e){
    e.preventDefault();
    try{
        await axios.post("http://localhost:3000/",{
            email,password
        })
        .then(res=>{
          if(res.data==="exist"){
            history("/",{state:{id:email}})
          }
          else if(res.data==="notexist"){
            alert("User have not sign up")
          }
        })
        .catch(e=>{
          alert("wrong details")
          console.log(e);
        })
    }
    catch(e){
        console.log("There is an error",e);
    }
  }

  return (
    <div>
      <form action="POST">
        <div class="row" style={{ marginRight: "auto" }}>
          <div class="col-lg-6" style={{ marginLeft: "25%" }}>
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Welcome Back</h1>
              </div>
              <form class="user">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-user"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email Address..."
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
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
                <div class="form-group">
                  <div class="custom-control custom-checkbox small">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck"
                    />
                  </div>
                </div>
                <a
                  href="index.html"
                  type="submit"
                  class="btn btn-primary btn-user btn-block"
                  onClick={submit}
                >
                  Login
                </a>
                <hr />
                <button class="btn btn-google btn-user btn-block" onClick={handleGoogle}>Login with Google</button>
                <a
                  href="index.html"
                  class="btn btn-facebook btn-user btn-block"
                >
                  <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                </a>
              </form>
              <hr />
              <div class="text-center">
                <a class="small" href="forgot-password.html">
                  Forgot Password?
                </a>
              </div>
              <div class="text-center">
                <Link class="small" to="/register">
                  Create an Account!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
