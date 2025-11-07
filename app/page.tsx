import { getProjects } from '@/lib/getProjects';
import { getVideos } from '@/lib/getVideos';
import PortfolioClient from '@/components/PortofolioClient';

export default function Home() {
  // Fetch data di server
  const projects = getProjects();
  const videos = getVideos();

  return <PortfolioClient projects={projects} videos={videos} />;
}