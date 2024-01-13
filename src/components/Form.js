import React, { useState } from "react";

const Form = () => {
    const [put, setPut] = useState({
        name:"",
        email:"",
        password:"",
        cpassword:"",
    })
     const handleChange =(e)=>{
        const {name, value}= e.target;
        setPut((pre)=>{
            return{...pre, [name]: value }
        })
     }
     const handlesubmit =(e)=>{
        e.preventDefault()
        console.log(put)
     }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
        ></input>
        <label>Email</label>
        <input
          type="text"
          name="email"
          required
          onChange={handleChange}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
        ></input>
        <label>Cpassword</label>
        <input
          type="password"
          name="cpassword"
          required
          onChange={handleChange}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
