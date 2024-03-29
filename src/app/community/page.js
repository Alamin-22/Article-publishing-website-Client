import CommunityMenu from "@/components/community/CommunityMenu";
import CommunityProfile from "@/components/community/CommunityProfile";
import CommunityRecentPost from "@/components/community/CommunityRecentPost";
import CommunityViewPost from "@/components/community/CommunityViewPost";
import CommunityPost from "@/components/community/communityPost";
import TopContributors from "@/components/community/topContributors";

const community = () => {
  return (
    <div className="mt-5 ">
      <div className="grid  lg:grid-cols-9">
        {/* layout 1 */}
        <div className="lg:col-span-2 col-span-1 mb-5">
          <CommunityProfile />
          <CommunityMenu />
        </div>
        {/* layout 2 */}
        <div className="lg:col-span-4  lg:mx-5">
          {/* write you post section  */}
          <CommunityPost />
          <div className=" my-5 rounded-lg">
            {/* view your post section  */}
            <CommunityViewPost />
          </div>
        </div>
        {/* layout 3 */}
        <div className="lg:col-span-3 ">
          <TopContributors />
          <CommunityRecentPost />
        </div>
      </div>
    </div>
  );
};

export default community;
