// components/ProtectedRoute.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSupabaseClient } from '../lib/supabase'

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const checkUser = async () => {
        const supabase = getSupabaseClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          router.push('/login');
        }
      };
      checkUser();
    }, []);

    return <WrappedComponent {...props} />;
  };
}