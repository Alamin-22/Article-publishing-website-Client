import moment from "moment";
import CommunityCommentCard from "./CommunityCommentCard";
import getAllPostData from "@/lib/getAllPostData";

const CommunityViewPost = async () => {
const allPostData = await getAllPostData()

  const formatDateTime = (dateTime) => {
    return moment(dateTime, "hh:mm a YYYY-MM-DD").format("hh:mm a DD-MM-YYYY");
  };

  return (
    <div className="">
      
        {allPostData.map((post, index) => (
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
            {post.postImglink? 
            <img
            className="w-full h-56 rounded-b-lg object-cover"
            src={post?.postImglink}
            alt="User image"
          />: ""
            }
            
            < CommunityCommentCard post={post} />
          </div>
        ))}
      
    </div>
  );
};

export default CommunityViewPost;
