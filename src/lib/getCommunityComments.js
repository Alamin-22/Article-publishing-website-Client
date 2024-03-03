// import axiosInstance from "@/api";
// import { useQuery } from "@tanstack/react-query";
// const GetAllCommunityComments = () => {
    
//     const { refetch, data: getCommunityComments = [] } = useQuery({
//       queryKey: ["getCommunityComments"],
//       queryFn: async () => {
//         const res = await axiosInstance.get("/v1/api/CommunityComments");
//         refetch();
//         return res.data;
//       },
//     });
//     return [getCommunityComments, refetch];
//   };
  
//   export default GetAllCommunityComments;
import axiosInstance from "@/api";
import { useQuery } from "@tanstack/react-query";

const GetAllCommunityComments = () => {
  const { refetch, data: getCommunityComments = [] } = useQuery({
    queryKey: ["getCommunityComments"],
    queryFn: async () => {
      const res = await axiosInstance.get("/v1/api/CommunityComments");
      return res.data;
    },
  });
  return [getCommunityComments, refetch];
};

export default GetAllCommunityComments;
