
import useAuth from "@/Hooks/useAuth";
import axiosInstance from "@/api";

export default async function getTopContributors() {
    const { user } = useAuth();

    try {
        // Show loading state
        
        // Fetch only the necessary data
        const response = await axiosInstance.get("/v1/api/all-users?limit=5"); // Limit the number of users fetched
        
        // Hide loading state
        
        const sortedUsers = response.data.sort((a, b) => b.posts - a.posts);
        const topContributors = sortedUsers.slice(0, 5);

        return topContributors;
    } catch (error) {
        console.error("Error fetching top contributors:", error);
        throw error;
    }
}
