import React from 'react';

const AppointmentType = ({ selectedType, onSelectType }) => {
  const types = [
    {
      id: 'general-examination',
      name: 'General Examination',
      description: 'General checkup'
    },
    {
      id: 'clinic-visit',
      name: 'Clinic Visit',
      description: 'Visit clinic/hospital'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {types.map((type) => (
        <div 
          key={type.id}
          className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${selectedType === type.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
          onClick={() => onSelectType(type.name)}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-blue-900">{type.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{type.description}</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedType === type.name ? 'border-blue-500' : 'border-gray-300'}`}>
              {selectedType === type.name && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentType;