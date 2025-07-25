import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";





// Fetch posts
const getPosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog`, {
      cache: "no-cache",
    });
    const data = await res.json();

    if (data.success) {
      return data.result;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Navbar />
      <Dashboard />
      <PostList posts={posts} />
    </main>
  );
}
