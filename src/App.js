import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Recquery from "./components/Recquery";
import Userform from "./components/Userform";
import { useState } from "react";

// const url = 'https://659a39b9652b843dea535cba.mockapi.io/users/user';

function App() {
  const [change , setChange] = useState('')
  const [spechange , setSpeChange] = useState('')

  const changedata =(e)=>{
     const detail =e
     setChange(detail)
  }

  const specificdata =(e)=> {
    const detail =e
    setSpeChange(detail)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home changedata={changedata} specificdata={specificdata}/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recquery" element={<Recquery />} />
                <Route path="/userform" element={<Userform change={change} spechange={spechange}/>} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
