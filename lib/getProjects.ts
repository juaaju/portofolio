import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  content: string;
  contentHtml: string;
}

// Strip markdown dari text untuk preview card
function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/^### (.*?)$/gim, '$1')           // H3
    .replace(/^## (.*?)$/gim, '$1')            // H2
    .replace(/^# (.*?)$/gim, '$1')             // H1
    .replace(/\*\*(.*?)\*\*/gim, '$1')         // Bold
    .replace(/\*(.*?)\*/gim, '$1')             // Italic
    .replace(/\[(.*?)\]\(.*?\)/gim, '$1')      // Links
    .replace(/`(.*?)`/gim, '$1')               // Inline code
    .replace(/^\s*[-*+]\s/gim, '')             // Lists
    .replace(/^\s*\d+\.\s/gim, '')             // Numbered lists
    .replace(/\n\n/gim, ' ')                   // Double line breaks to space
    .replace(/\n/gim, ' ')                     // Line breaks to space
    .replace(/\s+/gim, ' ')                    // Multiple spaces to single
    .trim();
}

export function getProjects(): Project[] {
  const projectsDir = path.join(process.cwd(), 'content/projects');
  
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const filenames = fs.readdirSync(projectsDir);
  
  const projects = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(projectsDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      // Parse markdown jadi HTML
      const contentHtml = md.render(content);
      
      // Ambil description dari frontmatter atau strip markdown
      let description = data.description;
      if (!description) {
        description = stripMarkdown(content).substring(0, 150);
      }
      
      return {
        id: filename.replace('.md', ''),
        title: data.title || 'Untitled',
        description,
        image: data.image || '/images/placeholder.jpg',
        tags: data.tags || [],
        content,
        contentHtml
      };
    });

  return projects;
}