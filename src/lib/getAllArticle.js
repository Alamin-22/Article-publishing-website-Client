import axiosInstance from "@/api";
import { useQuery } from "@tanstack/react-query";
const GetAllArticle = () => {
    
    const { refetch, data: getAllArticle = [] } = useQuery({
      queryKey: ["getAllArticle"],
      queryFn: async () => {
        const res = await axiosInstance.get("/allArticle");
        refetch();
        return res.data;
      },
    });
    return [getAllArticle, refetch];
  };
  
  export default GetAllArticle;
