"use client";
// import moment from "moment";
// import GetAllPostData from "@/lib/getAllPostData";
// import CommunityCommentCard from "@/Components/community/CommunityCommentCard";
// import React, { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// const CommunityViewPost = () => {
//   const [getAllPost, refetch] = GetAllPostData();
//   const [items, setItems] = useState([]);
//   const [hasMore, setHasMore] = useState(true);

//   const formatDateTime = (dateTime) => {
//     return moment(dateTime, "hh:mm a YYYY-MM-DD").format("hh:mm a DD-MM-YYYY");
//   };

//   return (
//     <div className="">
//       <InfiniteScroll
//       dataLength={items.length}
//       next={fetchMoreData}
//       hasMore={hasMore}
//       loader={<h4>Loading...</h4>}
//       endMessage={<p>No more items</p>}
//     >
//       {getAllPost?.map((post, index) => (
//         <div className="mt-5 bg-[#ededed] p-5 rounded-lg" key={index}>
//           <div className="flex gap-3">
//             <img
//               className="w-8 h-8 rounded-full"
//               src={post?.userPhoto}
//               alt="User image"
//             />
//             <div>
//               <h1 className="font-semibold text-gray-900 dark:text-white">
//                 {post?.userName}
//               </h1>
//               <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
//                 {formatDateTime(post?.datetime)}
//               </p>
//             </div>
//           </div>
//           <div className="pb-3 mt-3 bg-white p-2 rounded-t-lg">
//             <p>{post?.content}</p>
//           </div>
//           {post?.postImglink ? (
//             <img
//               className="w-full h-56 rounded-b-lg object-cover"
//               src={post?.postImglink}
//               alt="User image"
//             />
//           ) : (
//             ""
//           )}

//           <CommunityCommentCard post={post} />
//         </div>
//       ))}

// </InfiniteScroll>
//     </div>
//   );
// };

// export default CommunityViewPost;
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import moment from 'moment';
import GetAllPostData from '@/lib/getAllPostData';
import CommunityCommentCard from '@/Components/community/CommunityCommentCard';
import axiosInstance from '@/api';

const CommunityViewPost = () => {
  const [getAllPost, refetch] = GetAllPostData();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setItems(getAllPost);
  }, [getAllPost]);

  const formatDateTime = (dateTime) => {
    return moment(dateTime, 'hh:mm a YYYY-MM-DD').format('hh:mm a DD-MM-YYYY');
  };

  const fetchMoreData = () => {
    if (items.length > 21) {
      setTimeout(() => {
        setItems([...items, ...Array.from({ length: 20 })]);
      }, 1500);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div className="">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 className='text-center'>Please Wait</h4>}
        endMessage={<p>No more items</p>}
      >
        {items.map((post, index) => (
          <div className="mt-5 bg-[#ededed] p-5 rounded-lg" key={index}>
            <div className="flex gap-3">
              <img className="w-8 h-8 rounded-full" src={post?.userPhoto} alt="User image" />
              <div>
                <h1 className="font-semibold text-gray-900 dark:text-white">{post?.userName}</h1>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{formatDateTime(post?.datetime)}</p>
              </div>
            </div>
            <div className="pb-3 mt-3 bg-white p-2 rounded-t-lg">
              <p>{post?.content}</p>
            </div>
            {post?.postImglink ? (
              <img className="w-full h-56 rounded-b-lg object-cover" src={post?.postImglink} alt="User image" />
            ) : (
              ''
            )}

            <CommunityCommentCard post={post} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default CommunityViewPost;


