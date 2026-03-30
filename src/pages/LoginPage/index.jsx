import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [form,setForm] = useState({
    email:"",
    password:""
  });

  const [errors,setErrors] = useState({});
  const [touched,setTouched] = useState({});

  const handleChange=e=>
    setForm({...form,[e.target.name]:e.target.value});

  const handleBlur=e=>{
    const {name,value}=e.target;
    setTouched({...touched,[name]:true});

    let newErrors={...errors};

    if(!value.trim()) newErrors[name]=true;
    else delete newErrors[name];

    setErrors(newErrors);
  };

  const handleSubmit=e=>{
    e.preventDefault();

    let newErrors={};
    if(!form.email) newErrors.email=true;
    if(!form.password) newErrors.password=true;

    setErrors(newErrors);
    setTouched({email:true,password:true});

    if(Object.keys(newErrors).length===0)
      navigate("/dashboard");
  };

  const input=(name,placeholder,type="text")=>(
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
          border:
            touched[name]&&errors[name]
            ?"2px solid #e63946"
            :"1px solid #ddd"
        }}
      />
      {touched[name]&&errors[name]&&(
        <span style={{
          position:"absolute",
          right:"12px",
          top:"50%",
          transform:"translateY(-50%)",
          color:"#e63946",
          fontWeight:"bold"
        }}>!</span>
      )}
    </div>
  );

  return (
    <div style={pageStyle}>
      <form onSubmit={handleSubmit} style={cardStyle}>

        <h2 style={title}>Login</h2>

        {input("email","Email")}
        {input("password","Password","password")}

        <button style={btn}>Login</button>

        <p style={{textAlign:"center",marginTop:"15px"}}>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </form>
    </div>
  );
};

const pageStyle={
  minHeight:"100vh",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  backgroundImage:"url('https://i.pinimg.com/1200x/84/e3/f7/84e3f79c41d4218f2ecafacaa83a7538.jpg')",
  backgroundSize:"cover"
};

const cardStyle={
  width:"400px",
  background:"white",
  padding:"40px",
  borderRadius:"14px",
  boxShadow:"0 8px 25px rgba(0,0,0,0.08)"
};

const title={
  textAlign:"center",
  marginBottom:"25px",
  color:"#c24244"
};

const btn={
  width:"100%",
  padding:"12px",
  background:"#c24244",
  color:"white",
  border:"none",
  borderRadius:"8px",
  cursor:"pointer"
};

export default Login;