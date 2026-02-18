import React, { useState } from 'react';
import DoctorList from '../components/Appointment/DoctorList';
import AppointmentType from '../components/Appointment/AppointmentType';
import AppointmentSummary from '../components/Appointment/AppointmentSummary';
import PatientForm from '../components/Appointment/PatientForm';
import DateTimePicker from '../components/Appointment/DateTimePicker';

export default function BookAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentType, setAppointmentType] = useState('Clinic Visit');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    age: '',
    week: ''
  });

  const calculateTotal = () => {
    if (appointmentType === 'Clinic Visit') {
      return '1,500';
    }
    return '1,000';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800"># Book Doctor Appointment</h1>
        <p className="text-lg text-blue-600 mt-2">Safe care for mother & baby</p>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-blue-200 to-pink-200 mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Choose Your Doctor Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b pb-3">Choose Your Doctor</h2>
            <DoctorList 
              selectedDoctor={selectedDoctor}
              onSelectDoctor={setSelectedDoctor}
            />
          </div>

          {/* Select Date & Time Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b pb-3">Select Date & Time</h2>
            <DateTimePicker 
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSelectDate={setSelectedDate}
              onSelectTime={setSelectedTime}
            />
          </div>

          {/* Patient Details Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b pb-3">Patient Details</h2>
            <PatientForm 
              patientDetails={patientDetails}
              setPatientDetails={setPatientDetails}
            />
          </div>

          {/* Appointment Type Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b pb-3">Appointment Type</h2>
            <AppointmentType 
              selectedType={appointmentType}
              onSelectType={setAppointmentType}
            />
          </div>
        </div>

        {/* Right Column - Appointment Summary */}
        <div className="space-y-8">
          <AppointmentSummary 
            selectedDoctor={selectedDoctor}
            appointmentType={appointmentType}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            total={calculateTotal()}
          />

          {/* Payment Section */}
         

            <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-pink-500 text-white py-3 rounded-lg font-bold text-lg hover:opacity-90 transition">
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>

  );
}