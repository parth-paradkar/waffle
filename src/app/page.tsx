"use client";

// pages/auth/callback.tsx
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RootRedirect: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading...</p>
    </div>
  );
};

export default RootRedirect;