import axiosInstance from "@/api";

export default async function getAllPostData() {
    try {
        const response = await axiosInstance.get("/v1/api/posts");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching all posts:", error);
        throw error; // Rethrow the error to handle it somewhere else
    }
}
