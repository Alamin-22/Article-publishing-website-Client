"use client";
import useAuth from './../../Hooks/useAuth';
import getCommunityPost from "@/lib/getCommunityPost";
const MyPost = async () => {
  const { user } = useAuth()
  
  const myAllArticleData = await getCommunityPost()
  console.log(myAllArticleData);
  const myArticles = myAllArticleData.filter(
    (article) => article?.userEmail === user?.email
  );

  return (
    <div className="">
        <div >
          
          
          <h1 className="bg-[#D7D7D7]   font-semibold my-2 text-center m-2">Total Post: {myArticles?.length}</h1>
          </div>
      <div>
        {myArticles?.length === 0 && <div>You Have No Article</div>}
        {myArticles?.map((article, index) => (
          <div
            className="bg-[#D7D7D7] shadow-xl rounded-2xl m-2 p-2"
            key={article?._id}>
            

            <div className="grid justify-center items-center grid-cols-1 lg:grid-cols-8 gap-5">
             
              <div className="lg:col-span-2 flex justify-center items-center">
                <img
                  className="h-36 lg:w-56 w-full rounded-xl object-cover  border-white border-2"
                  src={article?.postImglink}
                  alt="Post Image Not Found"
                />
              </div>
              <div className="lg:col-span-6  p-3">
                
                <p className="text-gray-700 text-justify">{article?.content.slice(0, 200)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPost;
