import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPatient.css";

function AddPatient() {
  const [data, setData] = useState({
    idType: "Adhar Card",
    number: "",
    fullName: "",
    gender: "male",
    symptoms: "",
    roomNumber: "101",
    deposit: "",
  });

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log("Sending data to API:", data);

    const apiUrl = "http://localhost:4000/patient";

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/patientInfo");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form className="add-patient-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add Patient Information</h2>
      <table className="form-table">
        <tbody>
          <tr>
            <td className="form-table-cell">ID Type</td>
            <td className="form-table-cell">
              <select
                className="input-field"
                value={data.idType}
                onChange={(e) => setData({ ...data, idType: e.target.value })}
              >
                <option>Adhar Card</option>
                <option>Driving License</option>
                <option>Passport</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Number</td>
            <td className="form-table-cell">
              <input
                onChange={(e) => setData({ ...data, number: e.target.value })}
                type="text"
                value={data.number}
                required
                className="input-field"
              />
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Full Name</td>
            <td className="form-table-cell">
              <input
                onChange={(e) => setData({ ...data, fullName: e.target.value })}
                type="text"
                value={data.fullName}
                required
                className="input-field"
              />
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Gender</td>
            <td className="form-table-cell">
              <div className="gender-options">
                <label>
                  <input
                    type="radio"
                    name="Gender"
                    value="male"
                    checked={data.gender === "male"}
                    onChange={(e) =>
                      setData({ ...data, gender: e.target.value })
                    }
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="Gender"
                    value="female"
                    checked={data.gender === "female"}
                    onChange={(e) =>
                      setData({ ...data, gender: e.target.value })
                    }
                  />{" "}
                  Female
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Patient Disease & Symptoms</td>
            <td className="form-table-cell">
              <input
                onChange={(e) =>
                  setData({ ...data, symptoms: e.target.value })
                }
                type="text"
                value={data.symptoms}
                required
                className="input-field"
              />
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Allocated Room Number</td>
            <td className="form-table-cell">
              <select
                className="input-field"
                value={data.roomNumber}
                onChange={(e) =>
                  setData({ ...data, roomNumber: e.target.value })
                }
              >
                <option>101</option>
                <option>102</option>
                <option>103</option>
                <option>104</option>
                <option>105</option>
                <option>201</option>
                <option>202</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="form-table-cell">Deposit</td>
            <td className="form-table-cell">
              <input
                onChange={(e) => setData({ ...data, deposit: e.target.value })}
                type="number"
                value={data.deposit}
                required
                className="input-field"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="form-buttons">
              <button
                type="submit"
                className="add-patient-button add-patient-submit-btn"
              >
                Add Patient
              </button>
              <button
                type="reset"
                className="add-patient-button add-patient-reset-btn"
                onClick={() =>
                  setData({
                    idType: "Adhar Card",
                    number: "",
                    fullName: "",
                    gender: "male",
                    symptoms: "",
                    roomNumber: "101",
                    deposit: "",
                  })
                }
              >
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default AddPatient;