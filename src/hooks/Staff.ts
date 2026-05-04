import { useState, useEffect } from 'react';

export interface StaffMember {
  id: number;
  name: string;
  role: string;
  status: 'On Duty' | 'Off Duty';
  shift: string;
  image: string;
}

export const useStaff = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/staff.json')
      .then((res) => res.json())
      .then((data) => {
        setStaff(data);
        setLoading(false);
      });
  }, []);

  return { staff, loading };
};
