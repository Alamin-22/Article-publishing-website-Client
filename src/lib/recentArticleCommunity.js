import axiosInstance from "@/api";

export default async function recentArticles() {
    try {
        const response = await axiosInstance.get("/allArticle");
        
        if (response.status !== 200) {
            throw new Error("There was an error fetching recent articles");
        }

        const slicedData = response.data?.slice(0, 5);
        return slicedData;
    } catch (error) {
        console.error("Error fetching recent articles:", error);
        throw new Error("Failed to fetch recent articles");
    }
}
