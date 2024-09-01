"use client";

// pages/login.tsx
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getSupabaseClient } from "../../lib/supabase";
import GoogleSignIn from "../../components/GoogleSignIn";

const LoginPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const supabase = getSupabaseClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        router.push("/");
      }
    };
    checkUser();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome</h1>
      <GoogleSignIn />
    </div>
  );
};

export default LoginPage;
