import { AuthContext } from "@/Provider/AuthProvider";
import { useContext } from "react";

const useAuth = () => {

    const Auth = useContext(AuthContext);

    console.log(Auth)

    return Auth;
};

export default useAuth;