import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type DocMetadata = {
  title: string;
  order: number;
  summary?: string;
  slug: string;
};

export type DocModule = {
  title: string;
  description?: string;
  icon?: string;
  slug: string;
  order: number;
  chapters: DocMetadata[];
};

export type DocSeries = {
  title: string;
  description: string;
  icon?: string;
  slug: string;
  modules: DocModule[];
};

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  // Strip UTF-8 BOM so gray-matter always reads frontmatter correctly.
  const rawContent = fs.readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, '');
  return matter(rawContent);
}

// Get all chapters for a specific module within a series
export function getModuleChapters(seriesSlug: string, moduleSlug: string): DocMetadata[] {
  const moduleDir = path.join(process.cwd(), 'src', 'content', 'series', seriesSlug, moduleSlug);
  
  if (!fs.existsSync(moduleDir)) return [];
  
  const mdxFiles = getMDXFiles(moduleDir);
  
  const chapters = mdxFiles.map((file) => {
    const { data } = readMDXFile(path.join(moduleDir, file));
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

// Get module metadata
export function getModuleMetadata(seriesSlug: string, moduleSlug: string): DocModule | null {
  const metaPath = path.join(
    process.cwd(),
    'src',
    'content',
    'series',
    seriesSlug,
    moduleSlug,
    '_meta.json'
  );
  
  if (!fs.existsSync(metaPath)) return null;
  
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
  const chapters = getModuleChapters(seriesSlug, moduleSlug);
  
  return {
    title: meta.title,
    description: meta.description,
    icon: meta.icon,
    slug: moduleSlug,
    order: meta.order || 0,
    chapters,
  };
}

// Get a specific chapter content
export function getChapter(seriesSlug: string, moduleSlug: string, chapterSlug: string) {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'series',
    seriesSlug,
    moduleSlug,
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

// Get series metadata with all modules
export function getSeriesMetadata(seriesSlug: string): DocSeries | null {
  const seriesDir = path.join(process.cwd(), 'src', 'content', 'series', seriesSlug);
  const metaPath = path.join(seriesDir, '_meta.json');
  
  if (!fs.existsSync(metaPath)) return null;
  
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
  
  // Get all module folders
  const moduleFolders = fs.readdirSync(seriesDir).filter((item) => {
    const itemPath = path.join(seriesDir, item);
    return fs.statSync(itemPath).isDirectory();
  });
  
  const modules = moduleFolders
    .map((folder) => getModuleMetadata(seriesSlug, folder))
    .filter((module): module is DocModule => module !== null)
    .sort((a, b) => a.order - b.order);
  
  return {
    title: meta.title,
    description: meta.description,
    icon: meta.icon,
    slug: seriesSlug,
    modules,
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

// Helper: Get total chapter count for a series
export function getSeriesChapterCount(series: DocSeries): number {
  return series.modules.reduce((total, module) => total + module.chapters.length, 0);
}

// Legacy compatibility: Get all chapters flat (for old code)
export function getSeriesChapters(seriesSlug: string): DocMetadata[] {
  const series = getSeriesMetadata(seriesSlug);
  if (!series) return [];
  
  return series.modules.flatMap((module) => module.chapters);
}
