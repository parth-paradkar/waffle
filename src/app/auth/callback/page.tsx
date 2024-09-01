"use client";

// pages/auth/callback.tsx
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getSupabaseClient } from '../../../lib/supabase';

const AuthCallback: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const supabase = getSupabaseClient();
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        router.push('/');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push('/');
      }
    });
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading...</p>
    </div>
  );
};

export default AuthCallback;