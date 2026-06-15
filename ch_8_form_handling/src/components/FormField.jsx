import React from 'react';

const FormField = ({ label, htmlFor, children }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
};

export default FormField;
