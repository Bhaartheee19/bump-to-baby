import React from 'react';

const PatientForm = ({ patientDetails, setPatientDetails }) => {
  const handleChange = (e) => {
    setPatientDetails({
      ...patientDetails,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-6">
      {/* Patient Name */}
      <div>
        <label className="block text-sm font-medium text-blue-900 mb-2">
          Patient's Name *
        </label>
        <input
          type="text"
          name="name"
          value={patientDetails.name}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          placeholder="Enter patient's name"
        />
      </div>

      {/* Age and Week */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Age *
          </label>
          <input
            type="number"
            name="age"
            value={patientDetails.age}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            placeholder="Enter age"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Pregnancy Week (if applicable)
          </label>
          <input
            type="number"
            name="week"
            value={patientDetails.week}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            placeholder="Enter week"
          />
        </div>
      </div>

      {/* Note */}
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <span className="font-bold">Note:</span> This appointment is for mother & baby care
        </p>
      </div>
    </div>
  );
};

export default PatientForm;