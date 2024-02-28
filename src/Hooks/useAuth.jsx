"use client"

import { AuthContext } from "@/Provider/AuthProvider";
import { useContext } from "react";

const useAuth = () => {

    const Auth = useContext(AuthContext);

    return Auth;
};

export default useAuth;