import CommunityMenu from "@/Components/community/CommunityMenu";
import CommunityProfile from "@/Components/community/CommunityProfile";
import CommunityRecentPost from "@/Components/community/CommunityRecentPost";
import CommunityViewPost from "@/Components/community/CommunityViewPost";
import CommunityPost from "@/Components/community/communityPost";
import TopContributors from "@/Components/community/topContributors";

const community = () => {
  return (
    <div className="mt-5 relative">
  <div className="grid lg:grid-cols-9">
    {/* layout 1 */}
    <div className="lg:col-span-2 col-span-1 mb-5">
      <div className="sticky top-0">
        <CommunityProfile />
        <CommunityMenu />
      </div>
    </div>
    {/* layout 2 */}
    <div className="lg:col-span-4 relative lg:mx-5">
      {/* write your post section */}
      <div className="">
        <CommunityPost />
      </div>
      <div className="my-5 rounded-lg">
        {/* view your post section */}
        <CommunityViewPost />
      </div>
    </div>
    {/* layout 3 */}
    <div className="lg:col-span-3  ">
      <div className=" ">
      <TopContributors />
      <CommunityRecentPost />
      </div>
    </div>
  </div>
</div>

  );
};

export default community;
