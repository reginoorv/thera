function formatDate(date) {
  try {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  } catch (error) {
    console.error('Date formatting error:', error);
    reportError(error);
    return '';
  }
}

function getNextWeekDates() {
  try {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  } catch (error) {
    console.error('Error getting next week dates:', error);
    reportError(error);
    return [];
  }
}

function getTimeSlots() {
  try {
    const timeSlots = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM
    
    for (let hour = startHour; hour <= endHour; hour++) {
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      const period = hour < 12 ? 'AM' : 'PM';
      
      timeSlots.push({
        value: `${hour}:00`,
        label: `${formattedHour}:00 ${period}`
      });
      
      if (hour < endHour) {
        timeSlots.push({
          value: `${hour}:30`,
          label: `${formattedHour}:30 ${period}`
        });
      }
    }
    
    return timeSlots;
  } catch (error) {
    console.error('Error getting time slots:', error);
    reportError(error);
    return [];
  }
}

function isWeekend(date) {
  try {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  } catch (error) {
    console.error('Error checking weekend:', error);
    reportError(error);
    return false;
  }
}
