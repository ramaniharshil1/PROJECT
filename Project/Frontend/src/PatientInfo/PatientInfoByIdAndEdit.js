import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PatientInfo.css';

function PatientInfoByNumberAndEdit() {
  const { number } = useParams();
  const navigate = useNavigate();
  
  const [patient, setPatient] = useState({
    fullName: '',
    number: '',
    roomNumber: '',
    gender: '',
    symptoms: '',
    deposit: '',
  });

  const apiurl = 'http://localhost:4000/patient/' + number; 

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => setPatient(data)); 
  }, [apiurl]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(apiurl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient),
    }).then(() => {
      navigate('/patientInfo');
    });
  };

  return (
    <div className="patientDetailContainer">
      <h2 className="patientDetailHeading">Edit Patient Details</h2>
      <form onSubmit={handleSubmit} className="patientEditForm">
        <table className="patientInfoTable">
          <tbody>
            <tr>
              <td><label>Full Name:</label></td>
              <td>
                <input
                  type="text"
                  name="fullName"
                  value={patient.fullName}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label>Number:</label></td>
              <td>
                <input
                  type="text"
                  name="number"
                  value={patient.number}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label>Room No:</label></td>
              <td>
                <input
                  type="text"
                  name="roomNumber"
                  value={patient.roomNumber}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label>Gender:</label></td>
              <td>
                <input
                  type="text"
                  name="gender"
                  value={patient.gender}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label>Symptoms:</label></td>
              <td>
                <input
                  type="text"
                  name="symptoms"
                  value={patient.symptoms}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <td><label>Deposit:</label></td>
              <td>
                <input
                  type="text"
                  name="deposit"
                  value={patient.deposit}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default PatientInfoByNumberAndEdit;