import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api/api";

const EditTask = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    title:"",
    priority:"",
    startDate:"",
    dueDate:"",
    status:""
  });

  const [touched,setTouched]=useState({});

  useEffect(()=>{
    API.get(`/tasks/${id}`)
      .then(res=>setForm(res.data))
      .catch(err=>console.log(err));
  },[id]);

  const handleChange=e=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleBlur=e=>{
    setTouched({...touched,[e.target.name]:true});
  };

  const isError=field=>touched[field]&&!form[field];

  const handleSubmit=async e=>{
    e.preventDefault();

    await API.put(`/tasks/${id}`,form);

    navigate("/dashboard");
  };

  const inputStyle=field=>({
    width:"100%",
    padding:"12px",
    borderRadius:"8px",
    border:isError(field)
      ?"2px solid #e74c3c"
      :"1px solid #ccc",
    outline:"none"
  });

  return(
    <div style={{
      minHeight:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundImage:"url('https://i.pinimg.com/1200x/84/e3/f7/84e3f79c41d4218f2ecafacaa83a7538.jpg')",
      backgroundSize:"cover"
    }}>

      <form onSubmit={handleSubmit}
      style={{
        width:"500px",
        background:"white",
        padding:"40px",
        borderRadius:"12px",
        boxShadow:"0 4px 12px rgba(0,0,0,0.1)"
      }}>

        <h2 style={{color:"#c24244",marginBottom:"20px"}}>
          Edit Task
        </h2>

        <div style={{marginBottom:"15px"}}>
          <input
            name="title"
            placeholder="Task Name"
            value={form.title||""}
            onChange={handleChange}
            onBlur={handleBlur}
            style={inputStyle("title")}
          />
        </div>

        <div style={{marginBottom:"15px"}}>
          <select
            name="priority"
            value={form.priority||""}
            onChange={handleChange}
            style={inputStyle("priority")}
          >
            <option value="">Select Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div style={{marginBottom:"15px"}}>
          <input
            type="date"
            name="startDate"
            value={form.startDate||""}
            onChange={handleChange}
            onBlur={handleBlur}
            style={inputStyle("startDate")}
          />
        </div>

        <div style={{marginBottom:"15px"}}>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate||""}
            onChange={handleChange}
            onBlur={handleBlur}
            style={inputStyle("dueDate")}
          />
        </div>

        <div style={{marginBottom:"20px"}}>
          <select
            name="status"
            value={form.status||""}
            onChange={handleChange}
            style={inputStyle("status")}
          >
            <option value="">Select Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <button style={{
          width:"100%",
          padding:"12px",
          background:"#c24244",
          color:"white",
          border:"none",
          borderRadius:"8px",
          fontWeight:"600",
          cursor:"pointer"
        }}>
          Update Task
        </button>

      </form>

    </div>
  );
};

export default EditTask;