import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PatientInfo.css';

function PatientInfoById() {
  const { number } = useParams();
  const [patient, setPatient] = useState({});
  const apiurl = 'http://localhost:4000/patient/' + number;

  useEffect(() => {
    fetch(apiurl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error fetching patient data");
        }
      })
      .then((data) => setPatient(data))
  }, [number]);

  if (!patient || Object.keys(patient).length === 0) {
    return <div>Loading patient details...</div>;
  }

  return (
    <div className="patientDetailContainer">
      <h2 className="patientDetailHeading">Patient Detail</h2>
      <table className="patientDetailTable">
        <tbody>
          <tr>
            <th><strong>ID Type</strong></th>
            <td>{patient.idType}</td>
          </tr>
          <tr>
            <th><strong>Number</strong></th>
            <td>{patient.number}</td>
          </tr>
          <tr>
            <th><strong>Full Name</strong></th>
            <td>{patient.fullName}</td>
          </tr>
          <tr>
            <th><strong>Gender</strong></th>
            <td>{patient.gender}</td>
          </tr>
          <tr>
            <th><strong>Symptoms</strong></th>
            <td>{patient.symptoms}</td>
          </tr>
          <tr>
            <th><strong>Room Number</strong></th>
            <td>{patient.roomNumber}</td>
          </tr>
          <tr>
            <th><strong>Deposit</strong></th>
            <td>{patient.deposit}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PatientInfoById;