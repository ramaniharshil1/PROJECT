import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './PatientInfo.css'; 

function PatientInfo() {
  const [data, setData] = useState([]);
  const apiurl = 'http://localhost:4000/patient';

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (number) => {
    fetch('http://localhost:4000/patient/' + number, { 
      method: 'DELETE',
    })
      .then(() => {
        setData(data.filter((patient) => patient.number !== number));
      })
  };

  const formattedPatients = data.map((patient) => (
    <tr key={patient.number}>
      <td>{patient.number}</td>
      <td>{patient.fullName || patient.Name}</td> 
      <td>{patient.number || patient.Number}</td> 
      <td>{patient.roomNumber || patient.ROOM_NO}</td>
      <td>
        <Link className="btn btn-info" to={'/patient/' + patient.number}>
          Read More
        </Link>
      </td>
      <td>
        <Link className="btn btn-warning" to={'/patient/edit/' + patient.number}>
          Edit
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(patient.number)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="patientInfoContainer">
      <h2 className="patientInfoHeading">Patient Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Patient Name</th>
            <th>Number</th>
            <th>Room</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{formattedPatients}</tbody>
      </table>
    </div>
  );
}

export default PatientInfo;