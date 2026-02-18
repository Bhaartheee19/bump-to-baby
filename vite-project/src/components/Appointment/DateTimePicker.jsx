import React, { useState } from 'react';

const DateTimePicker = ({ selectedDate, selectedTime, onSelectDate, onSelectTime }) => {
  const [currentMonth] = useState(new Date(2026, 3, 1)); // April 2026
  
  // Days in April 2026
  const days = [
    [null,1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, null, null, null, null]
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="space-y-6">
      {/* Calendar */}
      <div>
        <div className="mb-4">
          <h3 className="font-bold text-blue-900 mb-2">March 2026</h3>
        </div>
        
        {/* Week days header */}
        <div className="grid grid-cols-7 gap-2 mb-3">
          {weekDays.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="space-y-2">
          {days.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-2">
              {week.map((day, dayIndex) => (
                <div 
                  key={`${weekIndex}-${dayIndex}`}
                  className={`h-10 flex items-center justify-center rounded-lg ${day ? 'cursor-pointer hover:bg-blue-50' : ''} ${selectedDate === day ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => day && onSelectDate(day)}
                >
                  {day || ''}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Time slots */}
      <div>
        <h3 className="font-bold text-blue-900 mb-4">Available Time Slots</h3>
        <div className="grid grid-cols-4 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              className={`py-2 px-3 rounded-lg border ${selectedTime === time ? 'bg-blue-500 text-white border-blue-500' : 'border-gray-300 hover:border-blue-400'}`}
              onClick={() => onSelectTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;