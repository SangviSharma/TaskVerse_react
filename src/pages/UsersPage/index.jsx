import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

const Users = () => {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await API.delete(`/users/${id}`);
    fetchUsers();
  };


  const thStyle = {
    padding: "16px",
    textAlign: "center"
  };

  const tdStyle = {
    padding: "16px",
    textAlign: "center"
  };

  const editBtn = {
    marginRight: "10px",
    background: "#7f4722",
    border: "none",
    color: "white",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  };

  const deleteBtn = {
    background: "#999",
    border: "none",
    color: "white",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  };

  return (
    <>
      <br/>
      <br/>

      <div style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f4f6f8",
        backgroundImage: "url('https://i.pinimg.com/1200x/84/e3/f7/84e3f79c41d4218f2ecafacaa83a7538.jpg')",
        backgroundSize: "cover"
      }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px"
        }}>

          <h1 style={{ color: "#c24244" }}>
            Users
          </h1>

          <button
            onClick={() => navigate("/add-user")}
            style={{
              background: "#c24244",
              color: "white",
              border: "none",
              padding: "12px 18px",
              borderRadius: "8px",
              fontWeight: "500",
              cursor: "pointer"
            }}>
            + Add User
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

            <thead style={{
              background: "#c24244",
              color: "white",
              height: "55px"
            }}>
              <tr>
                <th style={{...thStyle,width:"6%"}}>#</th>
                <th style={{...thStyle,width:"22%"}}>Name</th>
                <th style={{...thStyle,width:"28%"}}>Email</th>
                <th style={{...thStyle,width:"14%"}}>Role</th>
                <th style={{...thStyle,width:"14%"}}>Status</th>
                <th style={{...thStyle,width:"16%"}}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user,index)=>(
                <tr
                  key={user.id}
                  style={{
                    borderBottom:"1px solid #eee",
                    height:"65px",
                    transition:"0.2s"
                  }}
                  onMouseEnter={e=>e.currentTarget.style.background="#fafafa"}
                  onMouseLeave={e=>e.currentTarget.style.background="white"}
                >

                  <td style={tdStyle}>{index+1}</td>

                  <td style={{...tdStyle,fontWeight:"500"}}>
                    {user.name}
                  </td>

                  <td style={tdStyle}>{user.email}</td>

                  <td style={tdStyle}>
                    <span style={{
                      padding:"6px 14px",
                      borderRadius:"20px",
                      background:"#7f4722",
                      color:"white"
                    }}>
                      {user.role}
                    </span>
                  </td>

                  <td style={tdStyle}>
                    <span style={{
                      padding:"6px 14px",
                      borderRadius:"20px",
                      background:"#6c8f6b",
                      color:"white"
                    }}>
                      {user.status}
                    </span>
                  </td>

                  <td style={tdStyle}>
                    <button style={editBtn}
                    onClick={() => navigate(`/edit-user/${user.id}`)}>Edit</button>
                    <button style={deleteBtn}>Delete</button>
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

export default Users;