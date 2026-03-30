import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([
    { id: 1, name: "Design UI", priority: "Low", start: "2026-03-20", due: "2026-03-25", notes: "Homepage", progress: 20 },
    { id: 2, name: "Backend API", priority: "High", start: "2026-03-21", due: "2026-03-28", notes: "SpringBoot", progress: 50 }
  ]);

  const deleteTask = (id) =>
    setTasks(tasks.filter(t => t.id !== id));

  const priorityColor = (p) =>
    p === "High" ? "#c24244" :
    p === "Medium" ? "#7f4722" : "#6b8e6b";

  const cellStyle = {
    padding: "16px",
    textAlign: "center"
  };

  return (
    <>
      <br />
      <br />

      <div style={{
        padding: "40px",
        background: "#f5f6fa",
        backgroundImage: "url('https://i.pinimg.com/1200x/84/e3/f7/84e3f79c41d4218f2ecafacaa83a7538.jpg')",
        backgroundSize: "cover",
        minHeight: "100vh"
      }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px"
        }}>
          <h1 style={{ color: "#c24244" }}>Task Dashboard</h1>

          <button
            onClick={() => navigate("/add-task")}
            style={{
              background: "#c24244",
              color: "white",
              border: "none",
              padding: "12px 18px",
              borderRadius: "8px",
              fontWeight: "500",
              cursor: "pointer"
            }}>
            + Add Task
          </button>
        </div>

        <div style={{
          background: "white",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
        }}>

          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed"
          }}>

            <thead>
              <tr style={{ background: "#c24244", color: "white" }}>
                <th style={{ ...cellStyle, width: "5%" }}>#</th>
                <th style={{ ...cellStyle, width: "18%" }}>Task</th>
                <th style={{ ...cellStyle, width: "12%" }}>Priority</th>
                <th style={{ ...cellStyle, width: "12%" }}>Start</th>
                <th style={{ ...cellStyle, width: "12%" }}>Due</th>
                <th style={{ ...cellStyle, width: "18%" }}>Notes</th>
                <th style={{ ...cellStyle, width: "10%" }}>Progress</th>
                <th style={{ ...cellStyle, width: "13%" }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((t, i) => (
                <tr key={t.id} style={{ borderBottom: "1px solid #eee" }}>

                  <td style={cellStyle}>{i + 1}</td>

                  <td style={{ ...cellStyle, fontWeight: "500" }}>
                    {t.name}
                  </td>

                  <td style={cellStyle}>
                    <span style={{
                      background: priorityColor(t.priority),
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      display: "inline-block",
                      width: "85px"
                    }}>
                      {t.priority}
                    </span>
                  </td>

                  <td style={cellStyle}>{t.start}</td>
                  <td style={cellStyle}>{t.due}</td>
                  <td style={cellStyle}>{t.notes}</td>

                  <td style={cellStyle}>
                    <div style={{
                      width: "100px",
                      height: "8px",
                      background: "#eee",
                      margin: "auto",
                      borderRadius: "20px"
                    }}>
                      <div style={{
                        width: `${t.progress}%`,
                        height: "100%",
                        background: "#c24244",
                        borderRadius: "20px"
                      }} />
                    </div>
                  </td>

                  <td style={cellStyle}>
                    <button
                      onClick={() => navigate(`/edit-task/${t.id}`)}
                      style={{
                        marginRight: "8px",
                        background: "#7f4722",
                        color: "white",
                        border: "none",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        cursor: "pointer"
                      }}>
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTask(t.id)}
                      style={{
                        background: "#999",
                        color: "white",
                        border: "none",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        cursor: "pointer"
                      }}>
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </>
  );
};

export default Dashboard;