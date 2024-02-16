'use client'
import React, { use, useEffect, useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import { FaHeart, FaSave } from 'react-icons/fa';
import Image from 'next/image';
import axiosInstance from '@/api';
import toast from 'react-hot-toast';
import useAuth from '@/Hooks/useAuth';

const LatestCard = ({ title, author, text, thumbnail, articleId }) => {
    const { user } = useAuth();
    const [showFullArticle, setShowFullArticle] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const apiEndPointLike = `/addLike/${articleId}`;
    const apiEndPointUnlike = `/deleteLike/${articleId}`;
    const apiEndPointPost = `/addComment/${articleId}`;
    const apiEndPointGet = `/allCommentsForAnArticle/${articleId}`;
    const apiEndPointCheckLike = `/checkLike/${articleId}`;

    useEffect(() => {
        const getComments = async () => {
            const { data: res } = await axiosInstance.get(apiEndPointGet);
            setComments(res);
            console.log(res);
        };
        getComments();
    }, [])

    useEffect(() => {
        const checkIfLiked = async () => {
            try {
                const response = await axiosInstance.get(apiEndPointCheckLike, { params: { userEmail: user?.email } });
                setIsLiked(response.data.isLiked);
            } catch (error) {
                console.error("Error checking like:", error);
            }
        };
        checkIfLiked();
    }, [user])

    const handleToggleLike = async () => {
        try {
            if (!isLiked) {
                // If the user has not liked the article, send a request to like it
                await axiosInstance.post(apiEndPointLike, { userEmail: user?.email });
                toast.success("Liked successfully!");
            } else {
                // If the user has already liked the article, send a request to unlike it
                await axiosInstance.delete(apiEndPointUnlike, { data: { userEmail: user?.email } });
                toast.success("Unliked successfully!");
            }
            // Toggle the isLiked state after a successful like/unlike
            setIsLiked(!isLiked);
        } catch (error) {
            toast.error("Something went wrong with liking/unliking.");
            console.error("Error toggling like:", error);
        }
    };

    const truncatedText = text.length > 200 ? text.slice(0, 200) + '...' : text;

    const handleToggleArticle = () => {
        setShowFullArticle(!showFullArticle);
    };

    const handleToggleComments = () => {
        setShowComments(!showComments);
    };

    const handleAddComment = async () => {
        try {
            const commenter = user?.displayName || "anonymous user"
            const commentText = newComment;
            const commentObj = { commenter: commenter, commentText }
            const response = await axiosInstance.post(apiEndPointPost, commentObj);
            console.log("Article added successfully:", response.data);
            toast.success("Successfully added!");
            setComments([commentObj, ...comments]);
            setNewComment('');
        } catch (error) {
            toast.error("This didn't work.");
            console.error("Error adding post:", error);
        }
    };

    return (
        <div className={`flex flex-col-reverse ${showFullArticle ? '' : 'lg:flex-row'} items-center justify-between gap-5 mb-10  p-4 rounded-lg bg-[#ffffff85]`}>
            <div className='flex flex-col justify-between items-center w-full'>
                <div className='w-full'>
                    <h1 className='text-gray-700 font-black text-xs'>{articleId}</h1>
                    <h1 className='text-gray-800 font-black text-2xl'>{title}</h1>
                    <p className='text-gray-700 text-justify pb-4'>Written by {author} </p>
                    <p className='text-gray-700'>
                        <span dangerouslySetInnerHTML={{ __html: showFullArticle ? text : truncatedText }} />
                    </p>
                </div>
                {text.length > 200 && (
                    <div>
                        <Button
                            color='light'
                            className='bg-transparent border-none font-black'
                            onClick={handleToggleArticle}
                        >
                            {showFullArticle ? 'Show Less ▲' : 'View Full Article ▼'}
                        </Button>
                    </div>
                )}
                <div className='flex gap-3 mt-5 w-full justify-between'>
                    <Button
                        color='light'
                        className='bg-transparent border-none '
                        onClick={handleToggleComments}
                    >
                        <span className='font-black'>Comments</span>({comments.length}) {showComments ? '▲' : '▼'}
                    </Button>
                    <div className='flex'>
                        <Button color='light' className='bg-transparent border-none' onClick={handleToggleLike}>
                            <FaHeart />&nbsp;{isLiked ? 'Unlike' : 'Like'}
                        </Button>
                        <Button color='light' className='bg-transparent border-none'>
                            <FaSave />&nbsp;234
                        </Button>
                    </div>
                </div>
                {showComments && (
                    <div className='mt-5 w-full'>
                        {comments.map((comment, index) => (
                            <p key={index} className='text-gray-700 bg-slate-100 py-2 px-3 rounded-lg mb-3'>
                                <h6 className='text-black font-black text-sm'>{comment?.commenter}:</h6>
                                <p className='text-gray-700 text-sm'>{comment?.commentText}</p>
                            </p>
                        ))}
                        <TextInput
                            id='newComment'
                            name='newComment'
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder='Add your comment...'
                        />
                        <Button color='dark' pill className="mt-3" onClick={handleAddComment}>
                            Add Comment
                        </Button>
                    </div>
                )}
            </div>
            {!showFullArticle ? (
                <div
                    className='rounded-lg overflow-hidden'
                    style={{ maxWidth: '400px', maxHeight: '500px', width: '100%', height: 'auto' }}
                >
                    <Image
                        src={'/bannerPic.jpg'}
                        alt='Image description'
                        layout='responsive'
                        width={400}
                        height={500}
                    />
                </div>
            ) : (
                <div
                    className='rounded-lg overflow-hidden'
                    style={{ maxWidth: '1080px', maxHeight: '480px', width: '100%', height: 'auto' }}
                >
                    <Image
                        src={'/bannerPic.jpg'}
                        alt='Image description'
                        layout='responsive'
                        width={400}
                        height={500}
                    />
                </div>
            )}
        </div>
    );
};

export default LatestCard;
