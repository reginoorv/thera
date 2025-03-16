function Calendar({ onDateSelect, onTimeSelect }) {
  try {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [availableTimeSlots, setAvailableTimeSlots] = React.useState([]);
    const [selectedTime, setSelectedTime] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    
    const dates = getNextWeekDates();
    
    const handleDateSelect = async (date) => {
      try {
        setSelectedDate(date);
        setSelectedTime(null);
        setIsLoading(true);
        
        // Get available time slots for the selected date
        const response = await getAvailableSlots(date);
        
        if (response.success) {
          setAvailableTimeSlots(response.slots);
        } else {
          setAvailableTimeSlots([]);
          console.error('Failed to get available time slots:', response.message);
        }
        
        if (onDateSelect) {
          onDateSelect(date);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error selecting date:', error);
        setIsLoading(false);
        setAvailableTimeSlots([]);
      }
    };
    
    const handleTimeSelect = (time) => {
      setSelectedTime(time);
      
      if (onTimeSelect) {
        onTimeSelect(time);
      }
    };
    
    return (
      <div data-name="calendar" className="bg-white rounded-lg shadow-sm p-4">
        <h3 data-name="calendar-title" className="text-lg font-medium mb-4">Select a Date</h3>
        
        <div data-name="calendar-dates" className="grid grid-cols-7 gap-2 mb-6">
          {dates.map((date, index) => {
            const isDisabled = isWeekend(date);
            const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
            
            return (
              <button
                key={index}
                data-name="calendar-day"
                disabled={isDisabled}
                onClick={() => !isDisabled && handleDateSelect(date)}
                className={`
                  calendar-day p-2 rounded-md text-center 
                  ${isDisabled ? 'calendar-day-disabled bg-gray-100' : 'hover:bg-gray-100'} 
                  ${isSelected ? 'calendar-day-selected' : ''}
                `}
              >
                <div data-name="calendar-day-number" className="text-sm font-medium">
                  {date.getDate()}
                </div>
                <div data-name="calendar-day-name" className="text-xs">
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
              </button>
            );
          })}
        </div>
        
        {selectedDate && (
          <div data-name="calendar-time-slots">
            <h3 data-name="time-slots-title" className="text-lg font-medium mb-3">
              Select a Time
              <span className="text-sm font-normal text-gray-500 ml-2">
                {formatDate(selectedDate)}
              </span>
            </h3>
            
            {isLoading ? (
              <div data-name="time-slots-loading" className="flex justify-center py-4">
                <svg className="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            ) : availableTimeSlots.length > 0 ? (
              <div data-name="time-slots-grid" className="grid grid-cols-3 gap-2">
                {availableTimeSlots.map((slot, index) => (
                  <button
                    key={index}
                    data-name="time-slot"
                    onClick={() => handleTimeSelect(slot.value)}
                    className={`
                      p-2 text-sm border rounded-md text-center
                      ${selectedTime === slot.value 
                        ? 'bg-blue-500 text-white border-blue-500' 
                        : 'border-gray-200 hover:bg-gray-50'}
                    `}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            ) : (
              <div data-name="no-time-slots" className="text-center py-4 text-gray-500">
                No available time slots for this date.
              </div>
            )}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Calendar component error:', error);
    reportError(error);
    return null;
  }
}
