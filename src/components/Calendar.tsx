import { Calendar as BigCalendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useState, useEffect } from 'react';

const locales = { 'en-US': enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CalendarProps {
  filters: {
    foxHollow: boolean;
    cedarHills: boolean;
    topgolf: boolean;
  };
}

interface GolfEvent {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource?: {
    course: string;
  };
}

const Calendar: React.FC<CalendarProps> = ({ filters }) => {
  const [events, setEvents] = useState<GolfEvent[]>([]);

  // 🛠 Rehydrate stored dates
  useEffect(() => {
    const stored = localStorage.getItem('golfEvents');
    if (stored) {
      const parsed = JSON.parse(stored);
      const hydrated = parsed.map((event: any) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));
      setEvents(hydrated);
    }
  }, []);

  // 💾 Store events
  useEffect(() => {
    localStorage.setItem('golfEvents', JSON.stringify(events));
  }, [events]);

  // 🔍 Filter by selected course(s)
  const filteredEvents = events.filter((event) => {
    const course = event.resource?.course;
    return (
      (filters.foxHollow && course === 'foxHollow') ||
      (filters.cedarHills && course === 'cedarHills') ||
      (filters.topgolf && course === 'topgolf')
    );
  });

  return (
    <div className="bg-white border rounded-xl shadow-soft px-6 py-4">
      <h2 className="text-2xl font-semibold text-club-navy mb-4">Course Calendar</h2>

      <BigCalendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WEEK]}
        defaultView={Views.WEEK}
        style={{ height: 600 }}
        selectable
        onSelectEvent={(event) => alert(`Clicked: ${event.title}`)}
        onSelectSlot={(slotInfo) => {
          const title = window.prompt('Enter reservation name:');
          if (title) {
            const course =
              filters.foxHollow
                ? 'foxHollow'
                : filters.cedarHills
                ? 'cedarHills'
                : 'topgolf';

            const newEvent: GolfEvent = {
              title,
              start: slotInfo.start,
              end: slotInfo.end,
              allDay: false,
              resource: { course },
            };
            setEvents((prev) => [...prev, newEvent]);
          }
        }}
        eventPropGetter={(event) => {
          let backgroundColor = '#2e7d32'; // foxHollow green
          if (event.resource?.course === 'cedarHills') backgroundColor = '#8d6e63'; // tan
          if (event.resource?.course === 'topgolf') backgroundColor = '#1b1f23'; // dark
          return {
            style: {
              backgroundColor,
              borderRadius: '6px',
              color: 'white',
              padding: '2px 4px',
            },
          };
        }}
      />
    </div>
  );
};

export default Calendar;
