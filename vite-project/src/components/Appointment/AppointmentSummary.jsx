import React from 'react';

const AppointmentSummary = ({ selectedDoctor, appointmentType, selectedDate, selectedTime, total }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-blue-800 mb-6 border-b pb-3">Appointment Summary</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Doctor:</span>
          <span className="font-bold text-blue-900">
            {selectedDoctor ? selectedDoctor.name : 'Not selected'}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Date:</span>
          <span className="font-bold text-blue-900">
            {selectedDate ? `April ${selectedDate}, 2024` : 'Not selected'}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Time:</span>
          <span className="font-bold text-blue-900">
            {selectedTime || 'Not selected'}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Type:</span>
          <span className="font-bold text-blue-900">
            {appointmentType}
          </span>
        </div>

              
      </div>
    </div>
  );
};

export default AppointmentSummary;