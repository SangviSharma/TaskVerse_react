import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

const AddTask = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    priority: "Low",
    startDate: "",
    dueDate: "",
    notes: "",
    progress: 0
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleBlur = e => {
    const { name, value } = e.target;

    setTouched({ ...touched, [name]: true });

    let newErrors = { ...errors };

    if (!value) newErrors[name] = true;
    else delete newErrors[name];

    setErrors(newErrors);
  };

  const validateSubmit = () => {

    let newErrors = {};

    if (!form.name) newErrors.name = true;
    if (!form.startDate) newErrors.startDate = true;
    if (!form.dueDate) newErrors.dueDate = true;

    setErrors(newErrors);
    setTouched({
      name: true,
      startDate: true,
      dueDate: true
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateSubmit()) return;

    await API.post("/tasks", form);
    navigate("/dashboard");
  };

  const inputField = (name, placeholder, type = "text") => (
    <div style={{ position: "relative", marginBottom: "20px" }}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={form[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{
          width: "100%",
          padding: "12px 40px 12px 12px",
          borderRadius: "8px",
          border:
            touched[name] && errors[name]
              ? "2px solid #e63946"
              : "1px solid #ddd"
        }}
      />

      {touched[name] && errors[name] && (
        <span style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#e63946",
          fontWeight: "bold"
        }}>
          !
        </span>
      )}
    </div>
  );

  return (
    <div style={wrapperStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>

        <h2 style={{ color: "#c24244", textAlign: "center" }}>
          Add Task
        </h2>

        {inputField("name", "Task Name")}

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

        {inputField("startDate", "Start Date", "date")}
        {inputField("dueDate", "Due Date", "date")}

        <textarea
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
          style={textareaStyle}
        />

        <label>Progress</label>

        <input
          type="range"
          name="progress"
          min="0"
          max="100"
          value={form.progress}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "25px" }}
        />

        <button style={buttonStyle}>Add Task</button>

      </form>
    </div>
  );
};

const wrapperStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "url('https://i.pinimg.com/1200x/84/e3/f7/84e3f79c41d4218f2ecafacaa83a7538.jpg')",
  backgroundSize: "cover"
};

const formStyle = {
  width: "550px",
  background: "white",
  padding: "40px",
  borderRadius: "14px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
};

const selectStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "20px",
  borderRadius: "8px",
  border: "1px solid #ddd"
};

const textareaStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  marginBottom: "20px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#c24244",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

export default AddTask;