import axiosInstance from "@/api";
import { useQuery } from "@tanstack/react-query";
const GetAllUsers = () => {
    
    const { refetch, data: getAllUsers = [] } = useQuery({
      queryKey: ["getAllUsers"],
      queryFn: async () => {
        const res = await axiosInstance.get("/v1/api/all-users");
        refetch();
        return res.data;
      },
    });
    return [getAllUsers, refetch];
  };
  
  export default GetAllUsers;
