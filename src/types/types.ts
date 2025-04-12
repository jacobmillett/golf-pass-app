// src/types/types.ts

export interface User {
    id: string;
    name: string;
    role: 'admin' | 'user';
    permissions: CalendarPermissions;
  }
  
  export interface CalendarPermissions {
    foxHollow: boolean;
    cedarHills: boolean;
    topgolf: boolean;
  }
  
  export interface Reservation {
    id: string;
    date: string;
    location: 'Fox Hollow' | 'Cedar Hills' | 'Topgolf';
    timeSlot: string; // e.g., "8:00 AM - 9:00 AM"
    reservedBy: string;
  }
  
  export interface WeatherData {
    temperature: number;
    description: string;
    icon: string;
  }
  