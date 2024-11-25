import BlogPost from "@/components/blog-post";
import { getAllPosts } from "@/lib/blog";

// This is a Server Component
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <BlogPost id={params.id} />;
}