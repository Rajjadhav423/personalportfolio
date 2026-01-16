import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags?: string[];
  slug: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return matter(rawContent);
}

function getMDXData(dir: string): Metadata[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { data } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      title: data.title,
      publishedAt: data.publishedAt,
      summary: data.summary,
      image: data.image,
      tags: data.tags,
      slug,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'src', 'content', 'blog'));
}

export function getBlogPost(slug: string) {
  const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const { data, content } = readMDXFile(filePath);
  return {
    metadata: {
      title: data.title,
      publishedAt: data.publishedAt,
      summary: data.summary,
      image: data.image,
      tags: data.tags,
      slug,
    } as Metadata,
    content,
  };
}
