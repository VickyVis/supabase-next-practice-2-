"use client"

import React from "react";
import { useSupabase } from "../supabase-provider";

export default function Page() {
    const {supabase} = useSupabase();

    return (
        <div className="h-screen flex justify-center items-center">
            <button className="bg-white text-black p-3 rounded-md"
              onClick={() => supabase.auth.signInWithOAuth({ provider: "github" })}>

                Login with Github

            </button>
        </div>
    )
}