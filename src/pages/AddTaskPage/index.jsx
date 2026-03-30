import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {

  const navigate = useNavigate();

  const [form,setForm] = useState({
    name:"",
    priority:"Low",
    start:"",
    due:"",
    notes:"",
    progress:0
  });

  const [errors,setErrors] = useState({});
  const [touched,setTouched] = useState({});

  const handleChange = e =>
    setForm({...form,[e.target.name]:e.target.value});

  const handleBlur = e => {

    const {name,value} = e.target;
    setTouched({...touched,[name]:true});

    let newErrors = {...errors};

    if(name==="name" && !value.trim())
      newErrors.name=true;
    else if(name==="start" && !value)
      newErrors.start=true;
    else if(name==="due" && !value)
      newErrors.due=true;
    else
      delete newErrors[name];

    setErrors(newErrors);
  };

  const validateSubmit = () => {

    let newErrors={};

    if(!form.name.trim()) newErrors.name=true;
    if(!form.start) newErrors.start=true;
    if(!form.due) newErrors.due=true;

    setErrors(newErrors);
    setTouched({
      name:true,
      start:true,
      due:true
    });

    return Object.keys(newErrors).length===0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!validateSubmit()) return;

    navigate("/dashboard");
  };

  const inputField=(name,placeholder,type="text")=>(
    <div style={{position:"relative",marginBottom:"20px"}}>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={form[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{
          width:"100%",
          padding:"12px 40px 12px 12px",
          borderRadius:"8px",
          outline:"none",
          border:
            touched[name] && errors[name]
            ? "2px solid #e63946"
            : "1px solid #ddd",
          transition:"0.2s"
        }}
      />

      {touched[name] && errors[name] && (
        <span style={{
          position:"absolute",
          right:"12px",
          top:"50%",
          transform:"translateY(-50%)",
          color:"#e63946",
          fontWeight:"bold",
          fontSize:"18px"
        }}>
          !
        </span>
      )}

    </div>
  );

  return (
    <>
      <br/>
      <br/>
      
     

      <div style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"#f5f6fa",
        backgroundImage:"url('https://i.pinimg.com/1200x/84/e3/f7/84e3f79c41d4218f2ecafacaa83a7538.jpg')",
        backgroundSize:"cover"
        
      }}>
        

        <form
          onSubmit={handleSubmit}
          style={{
            width:"550px",
            background:"white",
            padding:"40px",
            borderRadius:"14px",
            boxShadow:"0 8px 25px rgba(0,0,0,0.08)"
          }}
        >

          <h2 style={{
            textAlign:"center",
            marginBottom:"30px",
            color:"#c24244"
          }}>
            Add Task
          </h2>

          {inputField("name","Task Name")}

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            style={selectStyle}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          {inputField("start","Start Date","date")}
          {inputField("due","Due Date","date")}

          <textarea
            name="notes"
            placeholder="Notes"
            value={form.notes}
            onChange={handleChange}
            style={{
              width:"100%",
              padding:"12px",
              borderRadius:"8px",
              border:"1px solid #ddd",
              marginBottom:"20px"
            }}
          />

          <label style={{fontWeight:"500"}}>Progress</label>

          <input
            type="range"
            name="progress"
            min="0"
            max="100"
            value={form.progress}
            onChange={handleChange}
            style={{width:"100%",marginBottom:"25px"}}
          />

          <button
            type="submit"
            style={{
              width:"100%",
              padding:"12px",
              background:"#c24244",
              border:"none",
              color:"white",
              borderRadius:"8px",
              fontWeight:"500",
              cursor:"pointer"
            }}
          >
            Add Task
          </button>

        </form>

      </div>
    </>
  );
};

const selectStyle={
  width:"100%",
  padding:"12px",
  marginBottom:"20px",
  borderRadius:"8px",
  border:"1px solid #ddd"
};

export default AddTask;