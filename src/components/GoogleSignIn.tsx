import React from "react";
import { getSupabaseClient } from "../lib/supabase";
import { Button } from "./ui/button";

export default function GoogleSignIn() {
  const handleSignIn = async () => {
    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      alert(error.message);
    }
  };

  return <Button onClick={handleSignIn}>Sign in with Google</Button>;
}
