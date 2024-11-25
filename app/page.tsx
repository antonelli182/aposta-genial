import { getAllPosts } from '@/lib/blog';
import HeroSection from '@/components/hero-section';
import LatestNews from '@/components/latest-news';
import TeamSection from '@/components/team-section';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <HeroSection />
      <LatestNews posts={posts} />
      <TeamSection />
    </main>
  );
}