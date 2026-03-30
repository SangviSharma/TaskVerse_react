import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {

  const navigate = useNavigate();
  const { id } = useParams();   

  const [form,setForm]=useState({
    name:"",
    email:"",
    role:"User",
    status:"Active"
  });

  const [touched,setTouched]=useState({});

 
  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${id}`)
      .then(res => setForm(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange=e=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleBlur=e=>{
    setTouched({...touched,[e.target.name]:true});
  };

  const isError=field=>touched[field]&&!form[field];

  const inputStyle=field=>({
    width:"100%",
    padding:"12px",
    borderRadius:"8px",
    border:isError(field)
      ?"2px solid #e74c3c"
      :"1px solid #ccc",
    outline:"none"
  });

 
  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{
      await axios.put(
        `http://localhost:8080/api/users/${id}`,
        form
      );

      alert("User Updated");
      navigate("/users");

    }catch(err){
      console.error(err);
      alert("Update failed");
    }
  };

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
          width:"450px",
          background:"white",
          padding:"40px",
          borderRadius:"12px",
          boxShadow:"0 4px 12px rgba(0,0,0,0.1)"
        }}>

        <h2 style={{color:"#c24244",marginBottom:"20px"}}>
          Edit User
        </h2>

        <div style={{marginBottom:"15px"}}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={inputStyle("name")}
          />
        </div>

        <div style={{marginBottom:"15px"}}>
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={inputStyle("email")}
          />
        </div>

        <div style={{marginBottom:"15px"}}>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            style={inputStyle("role")}
          >
            <option>User</option>
            <option>Admin</option>
          </select>
        </div>

        <div style={{marginBottom:"20px"}}>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            style={inputStyle("status")}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <button
          style={{
            width:"100%",
            padding:"12px",
            background:"#c24244",
            color:"white",
            border:"none",
            borderRadius:"8px",
            fontWeight:"600",
            cursor:"pointer"
          }}>
          Update User
        </button>

      </form>
    </div>
  );
};

export default EditUser;