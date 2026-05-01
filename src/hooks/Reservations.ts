import { useState, useEffect } from 'react';

export interface ReservationData {
  id: number;
  name: string;
  date: string;
  time: string;
  people: string;
}

export const useReservations = (refreshIntervalMs = 5000) => {
  const [reservations, setReservations] = useState<ReservationData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 1. Define the fetch logic using .then() instead of await
    const fetchReservations = () => {
      fetch('/reservations.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to load reservations');
          }
          return response.json();
        })
        .then((data) => {
          setReservations(data);
          setError(null); // Clear any previous errors if successful
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    // 2. Run it immediately the first time the component loads
    fetchReservations();

    // 3. Set up Polling: Run the fetch again every X milliseconds
    const intervalId = setInterval(() => {
      fetchReservations();
    }, refreshIntervalMs); // Defaults to 5000ms (5 seconds)

    // 4. Cleanup: Stop the timer when the user leaves the Dashboard
    return () => clearInterval(intervalId);
    
  }, [refreshIntervalMs]); 

  return { reservations, isLoading, error };
};