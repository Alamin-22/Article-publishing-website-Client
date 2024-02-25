import axiosInstance from "@/api";

export default async function getRecentPostData() {
    try {
        const response = await axiosInstance.get("/allArticle");
        const postData = response.data.slice(0, 3); 
        return postData;
    } catch (error) {
        console.error("Error fetching recent posts:", error);
        throw error; 
    }
}
