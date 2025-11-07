import fs from 'fs';
import path from 'path';

export interface Video {
  id: string;
  title: string;
  description: string;
}

export function getVideos(): Video[] {
  const videosPath = path.join(process.cwd(), 'public/data/videos.json');
  
  // Check if file exists
  if (!fs.existsSync(videosPath)) {
    return [];
  }

  const fileContent = fs.readFileSync(videosPath, 'utf8');
  const data = JSON.parse(fileContent);
  
  return data.videos || [];
}