import React from 'react'

import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div> <div class="row">
    <div class="col-lg-7" style={{marginLeft:'25%'}}>
        <div class="p-5">
            <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
            </div>
            <form class="user">
                <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" class="form-control form-control-user" id="exampleFirstName"
                            placeholder="First Name"/>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-user" id="exampleLastName"
                            placeholder="Last Name"/>
                    </div>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                        placeholder="Email Address"/>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" class="form-control form-control-user"
                            id="exampleInputPassword" placeholder="Password"/>
                    </div>
                    <div class="col-sm-6">
                        <input type="password" class="form-control form-control-user"
                            id="exampleRepeatPassword" placeholder="Repeat Password"/>
                    </div>
                </div>
                <a href="login.html" class="btn btn-primary btn-user btn-block">
                    Register Account
                </a>
                <hr/>
                <a href="index.html" class="btn btn-google btn-user btn-block">
                    <i class="fab fa-google fa-fw"></i> Register with Google
                </a>
                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </a>
            </form>
            <hr/>
            <div class="text-center">
                <a class="small" href="forgot-password.html">Forgot Password?</a>
            </div>
            <div class="text-center">
                <Link class="small" to="/login">Already have an account? Login!</Link>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Register