import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/recque.css";
import axios from "axios";
import moment from "moment";

const Recquery = (url) => {
    const [input,setInput]= useState({
        category:'',
        voiceLanguage:'',
        queTitle:'',
        quDescription:'',
        startTime:'',
        endTime:'',
        attachment:'',
        subcategory:'',
        date:''
    })

    const handlechange =(e)=>{
        const{name, value}= e.target;
        setInput((pre)=>{
            return{...pre, [name]:value}
        })
    }
    
    // const dateandtime = moment().format('MMMM Do YYYY, h:mm:ss a');
    

    const handleSubmit = async (e)=>{
      e.preventDefault()
      try{
        await axios.post('https://659a39b9652b843dea535cba.mockapi.io/users/user',input)
      }catch(err){
          console.log('there is an error')
      }
      setInput('')
    }

  return (
    <div className="main" >
      <div className="top-div">
        <div style={{ margin: "10px" }}>
          <Link to="/" className="btn btn-primary btn-icon-split">
            <span className="text">Back</span>
          </Link>
          <div className="title1">Create Query</div>
        </div>
      </div>
      <div className="sub-main">
        <h4 className="title">Topic</h4>
       <div>
        <div>
          <h4 className="sub-title">Category</h4>
          <div className="drop">
            <select className="select-box" required name='category' onChange={handlechange}>
              <option value="">select category</option>
              <option value="Zen-classDoubt">Zen-classDoubt</option>
              <option value="Placement Related">Placement Related</option>
              <option value="Coordination related">Coordination related</option>
              <option value="Pre-bootcamp">Pre-bootcamp</option>
            </select>
          </div>
        </div>
        {/* if(input.category===Zen-classDoubt){
        <div>
          <h4 className="sub-title">Sub-Category</h4>
          <div className="drop">
            <select className="select-box" required name='subcategory' onChange={handlechange}>
              <option value="">select category</option>
              <option value="Task">Task</option>
              <option value="Webcode">Webcode</option>
              <option value="Classtopic">Classtopic</option>
              <option value="Webkata">Webkata</option>
              <option value="Codekata">Codekata</option>
              <option value="Assessment">Assessment</option>
            </select>
          </div>
        </div>}else if(category===Placement Related){
        <div>
          <h4 className="sub-title">Sub-Category</h4>
          <div className="drop">
            <select className="select-box" required name='subcategory' onChange={handlechange}>
              <option value="">select category</option>
              <option value="Company-info">Company-info</option>
              <option value="CompletionCertification">CompletionCertification</option>
              <option value="Portfolio">Portfolio</option>
            </select>
          </div>
        </div>}else if(category===Coordination related){
        <div>
          <h4 className="sub-title">Sub-Category</h4>
          <div className="drop">
            <select className="select-box" required name='subcategory' onChange={handlechange}>
              <option value="">select category</option>
              <option value="SessionTiming">SessionTiming</option>
              <option value="SessionjoiningLink">SessionjoiningLink</option>
              <option value="sessionFeedback">session Feedback</option>
              <option value="CompletionCertification">Completion Certification</option>
              <option value="Payment">Payment</option>
            </select>
          </div>
        </div>}else(category===Pre-bootcamp){
        <div>
          <h4 className="sub-title">Sub-Category</h4>
          <div className="drop">
            <select className="select-box" required name='subcategory' onChange={handlechange}>
              <option value="">select category</option>
              <option value="session">session</option>
              <option value="Payment">Payment</option>
              <option value="Codekata">Codekata</option>
              <option value="Webkata">Webkata</option>
              <option value="Task">Task</option>
              <option value="others">others</option>
            </select>
          </div>
        </div>} */}
        </div>
        <div>
          <h4 className="sub-title">Voice Language</h4>
          <div className="drop">
            <select className="select-box" required name='voiceLanguage' value={input.voiceLanguage} onChange={handlechange}>
              <option value="">select language</option>
              <option value="Tamil">Tamil</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
        <hr/>
        <h4 className="title">Details</h4>
        <div>
          <h4 className="sub-title">Query Title</h4>
          <input className="drop" required name='queTitle' placeholder="Enter query title" onChange={handlechange}/>
        </div>
        <div>
          <h4 className="sub-title">Query Description</h4>
          <input className="drop" required name='quDescription' placeholder="Enter Description" onChange={handlechange}/>
        </div>
        <hr />
        
        
        <h4 className="title">Your available time?</h4>
        <div>
          <h4 className="sub-title">From</h4>
          <input
            className="drop"
            name="startTime"
            type="time" required 
            max="19:00"
            onChange={handlechange}
          />
        </div>
        <div>
          <h4 className="sub-title">To</h4>
          <input
            className="drop"
            name="endTime"
            type="time" required 
            max="19:00"
            onChange={handlechange}
          />
        </div>
        <hr />
        <div>
          <h4 className="title">Attachment</h4>
          <div class="d-flex">
            <div className="attachments__body">
            <input type="file" className="add__attachment" name='attachment' ></input>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/">
            <button
              type="reset"
              className="btn cancel-btn"
              style={{
                color: "#375dce",
                borderColor: "#375dce",
                padding: "3px 24px",
                margin: "5px",
              }}
            >
              Cancel
            </button>
          </Link>
          <div className="lastBtns">
            <button
              type="submit"
              class="btn submit-btn"
              disabled=""
              onClick={handleSubmit}
              style={{
                backgroundColor: "#375dce",
                color: "white",
                padding: "3px 24px",
                margin: "5px",
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recquery;