import CreatePost from "@/components/CreatePost";
import RecommendedUsers from "@/components/RecommendedUsers";
import { currentUser } from "@clerk/nextjs/server";

async function Home() {
  const user = await currentUser();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">{user ? <CreatePost /> : null}</div>
      <div className="lg:col-span-4 lg:block hidden sticky top-20">
        <RecommendedUsers />
      </div>
    </div>
  );
}

export default Home;
