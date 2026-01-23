import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type DocMetadata = {
  title: string;
  order: number;
  summary?: string;
  slug: string;
};

export type DocSeries = {
  title: string;
  description: string;
  icon?: string;
  slug: string;
  chapters: DocMetadata[];
};

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return matter(rawContent);
}

// Get all chapters for a specific series (e.g., "docker")
export function getSeriesChapters(seriesSlug: string): DocMetadata[] {
  const seriesDir = path.join(process.cwd(), 'src', 'content', 'series', seriesSlug);
  
  if (!fs.existsSync(seriesDir)) return [];
  
  const mdxFiles = getMDXFiles(seriesDir);
  
  const chapters = mdxFiles.map((file) => {
    const { data } = readMDXFile(path.join(seriesDir, file));
    const slug = path.basename(file, path.extname(file));
    
    return {
      title: data.title || slug,
      order: data.order || 0,
      summary: data.summary,
      slug,
    };
  });
  
  // Sort by order
  return chapters.sort((a, b) => a.order - b.order);
}

// Get a specific chapter content
export function getChapter(seriesSlug: string, chapterSlug: string) {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'series',
    seriesSlug,
    `${chapterSlug}.mdx`
  );
  
  if (!fs.existsSync(filePath)) return null;
  
  const { data, content } = readMDXFile(filePath);
  
  return {
    metadata: {
      title: data.title,
      order: data.order || 0,
      summary: data.summary,
      slug: chapterSlug,
    } as DocMetadata,
    content,
  };
}

// Get series metadata
export function getSeriesMetadata(seriesSlug: string): DocSeries | null {
  const metaPath = path.join(
    process.cwd(),
    'src',
    'content',
    'series',
    seriesSlug,
    '_meta.json'
  );
  
  if (!fs.existsSync(metaPath)) return null;
  
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
  const chapters = getSeriesChapters(seriesSlug);
  
  return {
    title: meta.title,
    description: meta.description,
    icon: meta.icon,
    slug: seriesSlug,
    chapters,
  };
}

// Get all series for blog listing
export function getAllSeries(): DocSeries[] {
  const seriesDir = path.join(process.cwd(), 'src', 'content', 'series');
  
  if (!fs.existsSync(seriesDir)) return [];
  
  const folders = fs.readdirSync(seriesDir).filter((item) => {
    const itemPath = path.join(seriesDir, item);
    return fs.statSync(itemPath).isDirectory();
  });
  
  return folders
    .map((folder) => getSeriesMetadata(folder))
    .filter((series): series is DocSeries => series !== null);
}
