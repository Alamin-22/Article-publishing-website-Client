import axiosInstance from "@/api";
import { useQuery } from "@tanstack/react-query";

const GetAllPostData = () => {
  const { refetch, data: getAllPost = [] } = useQuery({
    queryKey: ["getAllPost"],
    queryFn: async () => {
      const res = await axiosInstance.get("/v1/api/posts?page=1&perPage=5"); // Adding perPage parameter to limit data to 10 posts
      return res.data;
    },
  });
  return [getAllPost, refetch];
};

export default GetAllPostData;

