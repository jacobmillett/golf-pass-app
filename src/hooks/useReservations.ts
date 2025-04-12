// src/hooks/useReservations.ts
import { useState } from 'react';
import { Reservation } from '../types/types';

export const useReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const addReservation = (reservation: Reservation) => {
    setReservations([...reservations, reservation]);
  };

  const removeReservation = (reservationId: string) => {
    setReservations(reservations.filter(r => r.id !== reservationId));
  };

  return { reservations, addReservation, removeReservation };
};
