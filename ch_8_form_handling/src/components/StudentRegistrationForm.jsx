import React from "react";
import FormField from "./FormField";
import { useState } from "react";

const genderOptions = [
  { value: "", label: "Select gender" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "others", label: "Others" },
];

const branchOptions = [
  { value: "", label: "Select branch" },
  { value: "computer", label: "Computer Engineering" },
  { value: "electrical", label: "Electrical Engineering" },
  { value: "electronics", label: "Electronics Engineering" },
  { value: "mechanical", label: "Mechanical Engineering" },
  { value: "civil", label: "Civil Engineering" },
  { value: "chemical", label: "Chemical Engineering" },
];

const StudentRegistrationForm = () => {
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
    gender: "",
    prn: 0,
    branch: "",
  });

  const updateData = (e) => {
    e.preventDefault();
    setStudentData({
        ...studentData,
        [e.target.name]: e.target.value
    });
  }

  const submitData = (e) => {
    e.preventDefault();
    console.log("Student name: ", studentData.firstName, studentData.lastName);
    console.log("Email: ", studentData.email);
    console.log("Phone No.: ", studentData.phone);
    console.log("PRN: ", studentData.prn);
    console.log("Gender: ", studentData.gender);
    console.log("Branch: ", studentData.branch);
  }

  const clearData = (e) => {
    e.preventDefault();
    setStudentData({
      firstName: "",
      lastName: "",
      email: "",
      phone: 0,
      gender: "",
      prn: 0,
      branch: "",
    });
  };
  return (
    <section className="form-card">
      <header className="form-header">
        <div>
          <p className="eyebrow">Student registration</p>
          <h1>Register a new student</h1>
        </div>
        <p className="form-intro">
          Capture the student profile details with a clean and professional
          layout. The form above is UI-only and ready for logic.
        </p>
      </header>

      <form className="student-form">
        <div className="form-grid">
          <FormField label="First name" htmlFor="firstName">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              className="input-field"
              value={studentData.firstName}
              onChange={updateData}
            />
          </FormField>

          <FormField label="Last name" htmlFor="lastName">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              className="input-field"
              value={studentData.lastName}
              onChange={updateData}
            />
          </FormField>

          <FormField label="Email address" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              className="input-field"
              value={studentData.email}
              onChange={updateData}
            />
          </FormField>

          <FormField label="Phone number" htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="123-456-7890"
              className="input-field"
              value={studentData.phone}
              onChange={updateData}
            />
          </FormField>

          <FormField label="Gender" htmlFor="gender">
            <select
              id="gender"
              name="gender"
              className="select-field"
              value={studentData.gender}
              onChange={updateData}
            >
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="PRN" htmlFor="prn">
            <input
              id="prn"
              name="prn"
              type="number"
              placeholder="1234567890"
              className="input-field"
              value={studentData.prn}
              onChange={updateData}
            />
          </FormField>

          <FormField label="Branch" htmlFor="branch">
            <select
              id="branch"
              name="branch"
              className="select-field"
              value={studentData.branch}
              onChange={updateData}
            >
              {branchOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <div className="actions">
          <button type="button" className="primary-btn" onClick={submitData}>
            Register
          </button>
          <button type="button" className="secondary-btn" onClick={clearData}>
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default StudentRegistrationForm;
