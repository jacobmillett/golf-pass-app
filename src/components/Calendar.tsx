// src/components/Calendar.tsx
import { Calendar as BigCalendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useState } from 'react';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const mockEvents = [
  {
    title: 'Sample Tee Time',
    start: new Date(),
    end: new Date(new Date().getTime() + 60 * 60 * 1000),
    allDay: false,
  },
];

interface CalendarProps {
  filters: {
    foxHollow: boolean;
    cedarHills: boolean;
    topgolf: boolean;
  };
}

const Calendar: React.FC<CalendarProps> = ({ filters }) => {
  const [events, setEvents] = useState(mockEvents);

  const activeCalendars = Object.entries(filters)
    .filter(([_, enabled]) => enabled)
    .map(([key]) => key)
    .join(', ');

  return (
    <div>
      <p className="mb-4">Showing calendars for: {activeCalendars || 'None selected'}</p>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WEEK]}
        defaultView={Views.WEEK}
        style={{ height: 500 }}
        onSelectEvent={(event: any) => alert(`Clicked event: ${event.title}`)}
        onSelectSlot={(slotInfo: any) => {
            const title = window.prompt('Enter reservation name (e.g., Jacob Tee Time)');
            if (title) {
              const newEvent = {
                title,
                start: slotInfo.start,
                end: slotInfo.end,
                allDay: false,
              };
              setEvents((prev) => [...prev, newEvent]);
            }
          }}          
        selectable
      />
    </div>
  );
};

export default Calendar;
