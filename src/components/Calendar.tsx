// src/components/Calendar.tsx
import React from 'react';

interface CalendarProps {
  filters: {
    foxHollow: boolean;
    cedarHills: boolean;
    topgolf: boolean;
  };
}

const Calendar: React.FC<CalendarProps> = ({ filters }) => {
  return (
    <div>
      {filters.foxHollow && <div>📅 Fox Hollow Calendar Placeholder</div>}
      {filters.cedarHills && <div>📅 Cedar Hills Calendar Placeholder</div>}
      {filters.topgolf && <div>📅 Topgolf Reservation Placeholder</div>}
    </div>
  );
};

export default Calendar;
