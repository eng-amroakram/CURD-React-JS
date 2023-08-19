import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ReadList() {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get("https://some-data.onrender.com/stores")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://some-data.onrender.com/stores/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleUpdate = (id) => {
    navigation(`/update/${id}`);
  };

  return (
    <div>
      <h1>Read List</h1>

      <table
        style={{
          borderCollapse: "collapse",
          border: "1px solid black",
          width: "100%",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "6px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "6px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "6px" }}>
              Cities
            </th>
            <th style={{ border: "1px solid black", padding: "6px" }}>
              Control
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid black", padding: "6px" }}>
                {item.id}
              </td>
              <td style={{ border: "1px solid black", padding: "6px" }}>
                {item.name}
              </td>
              <td style={{ border: "1px solid black", padding: "6px" }}>
                {item.cities}
              </td>

              <td style={{ border: "1px solid black", padding: "6px" }}>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleUpdate(item.id)}
                >
                  Update
                </button>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "6px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => navigation("/create")}
      >
        Create
      </button>
    </div>
  );
}

export default ReadList;
