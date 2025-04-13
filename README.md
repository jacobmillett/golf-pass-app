# IS 542 React Project

Mind you not all of this is functional. I am going to continue this and actually use this. I just wanted to get the parts that were essential for this class in.

🏌️ Golf Pass Reservation App

This is a single-page web application for managing golf pass reservations at three venues: Fox Hollow Golf Club, Cedar Hills Golf Club, and Topgolf in Vineyard. Built using **TypeScript**, **React**, and **Tailwind CSS**, the app allows users to view available reservation slots on a calendar, filter by course, and view the current weather in American Fork, Utah. Admin users can also manage user permissions.

---

## 💻 Features

- ✅ **Login System**: Login as a regular user or an admin to access different views.
- ✅ **Interactive Calendar**: Book reservations by clicking available time slots.
- ✅ **Filter by Course**: Toggle between Fox Hollow, Cedar Hills, and Topgolf.
- ✅ **Weather Widget**: Displays current weather using the OpenWeatherMap API.
- ✅ **Admin Panel**: Add new users and assign visibility permissions per calendar.
- ✅ **Persistent Data**: User bookings are saved using localStorage.
- ✅ **Responsive Design**: Fully styled with Tailwind CSS for mobile and desktop.

---

## 🔧 Technologies Used

- ⚛️ React (with functional components and hooks)
- 📘 TypeScript (with strict types and interfaces)
- 🌤️ OpenWeatherMap API (for real-time weather in American Fork, UT)
- 🎨 Tailwind CSS (custom theme for a clean, golf-brand aesthetic)
- 🗂️ LocalStorage (for event persistence across reloads)
- 📅 react-big-calendar (calendar component for slot management)
- 🔁 React Router (for routing between login, calendar, and admin pages)

---


src/
├── components/         // Reusable UI components (Calendar, WeatherWidget)
├── pages/              // Routed pages (LoginPage, CalendarsPage, AdminPage)
├── hooks/              // Custom hooks (useWeather, useAuth)
├── utils/              // API utilities
├── types/              // Shared TypeScript interfaces



## 🧪 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/jacobmillett/golf-pass-app.git
   cd golf-pass-app
