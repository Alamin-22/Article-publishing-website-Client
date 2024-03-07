"use client"
import moment from "moment";
import GetAllPostData from "@/lib/getAllPostData";
import CommunityCommentCard from "@/Components/community/CommunityCommentCard";

const CommunityViewPost =   () => {
const [getAllPost, refetch]=   GetAllPostData()


  const formatDateTime = (dateTime) => {
    return moment(dateTime, "hh:mm a YYYY-MM-DD").format("hh:mm a DD-MM-YYYY");
  };

  return (
    <div className="">
      
        {getAllPost?.map((post, index) => (
          <div className="mt-5 bg-[#ededed] p-5 rounded-lg" key={index}>
            <div className="flex gap-3">
              <img
                className="w-8 h-8 rounded-full"
                src={post?.userPhoto}
                alt="User image"
              />
              <div>
                <h1 className="font-semibold text-gray-900 dark:text-white">
                  {post?.userName}
                </h1>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {formatDateTime(post?.datetime)}
                </p>
              </div>
            </div>
            <div className="pb-3 mt-3 bg-white p-2 rounded-t-lg">
            
              <p>{post?.content}</p>
            </div>
            {post?.postImglink? 
            <img
            className="w-full h-56 rounded-b-lg object-cover"
            src={post?.postImglink}
            alt="User image"
          />: ""
            }
            
            < CommunityCommentCard post={post} />
          </div>
        ))}
      
      <div className="flex flex-col items-center">
  
  <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
  </span>
  <div className="inline-flex mt-2 xs:mt-0">
    
    <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Prev
    </button>
    <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </button>
  </div>
</div>
    </div>
  );
};

export default CommunityViewPost;

