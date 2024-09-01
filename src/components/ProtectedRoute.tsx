// components/ProtectedRoute.tsx
"use client"


import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../context/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
};
