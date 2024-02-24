import axiosInstance from "@/api";

export default async function getCommunityPost() {
    try {
        const response = await axiosInstance.get("/v1/api/posts");
        
        if (response.status !== 200) {
            throw new Error("There was an error fetching recent articles");
        }

        return response.data;
    } catch (error) {
        console.error("Error fetching getCommunityPostarticles:", error);
        throw new Error("Failed to fetch getCommunityPost articles");
    }
}
