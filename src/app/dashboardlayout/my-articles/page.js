"use client"
import { useState, useEffect } from "react";
import axiosInstance from "@/api"; 
import toast from "react-hot-toast";
import useAuth from './../../../Hooks/useAuth';


const MyArticle = () => {
    const apiEndPoint = "/allArticle"; // Corrected the variable name
    const [allPostData, setAllPostData] = useState([]);
    const {user} = useAuth()
    
    useEffect(() => {
        const getAllMyArticleData = async () => {
            try {
                const { data: res } = await axiosInstance.get(apiEndPoint); 
                setAllPostData(res);
            } catch (error) {
                console.error("Error fetching all post data:", error);
                toast.error("Failed to fetch post data.");
            }
        };
        getAllMyArticleData();
    }, []);
    
    return (
        <div>
            <h2>This is my article page coming from dashboard</h2> 
            <div>
                {allPostData.map(article => {
                    if (user.email === article.authorEmail) {
                        return (
                            <div key={article._id}>
                                <p>{article.author}</p>
                            </div>
                        );
                    } else {
                        return null; // Render nothing if condition is not met
                    }
                })}
            </div> 
            div
        </div>
    );
};

export default MyArticle;
