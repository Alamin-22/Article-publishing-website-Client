import React, { useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import { FaHeart, FaSave } from 'react-icons/fa';
import Image from 'next/image';

const LatestCard = ({ title, author, text, thumbnail, articleId }) => {
    const [showFullArticle, setShowFullArticle] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const truncatedText = text.length > 200 ? text.slice(0, 200) + '...' : text;

    const handleToggleArticle = () => {
        setShowFullArticle(!showFullArticle);
    };

    const handleToggleComments = () => {
        setShowComments(!showComments);
    };

    const handleAddComment = () => {
        setComments([...comments, newComment]);
        setNewComment('');
    };

    return (
        <div className={`flex flex-col-reverse ${showFullArticle ? '' : 'lg:flex-row'} items-center justify-between gap-5 mb-10  p-4 rounded-lg bg-[#ffffff85]`}>
            <div className='flex flex-col justify-between items-center'>
                <div className='flex-1'>
                    <h1 className='text-gray-800 font-black text-2xl'>{title}</h1>
                    <p className='text-gray-700 text-justify pb-4'>Written by {author} </p>
                    <p className='text-gray-700 text-justify'>
                        {showFullArticle ? text : truncatedText}
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
                        <Button color='light' className='bg-transparent border-none'>
                            <FaHeart />&nbsp;8532
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
                                {comment}
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
