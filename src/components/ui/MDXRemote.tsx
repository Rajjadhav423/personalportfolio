import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
import { CardSpotlight } from './card-spotlight';

const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-3xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400" />
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-2xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100 border-l-4 border-cyan-500 pl-4" />
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-xl font-extrabold mt-6 mb-3 text-zinc-800 dark:text-zinc-100" />
  ),
  h4: (props: any) => (
    <h4 {...props} className="text-lg font-bold mt-4 mb-2 text-zinc-800 dark:text-zinc-100" />
  ),
  p: (props: any) => (
    <p {...props} className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed" />
  ),
  ul: (props: any) => (
    <ul {...props} className="list-disc list-inside mb-4 space-y-2 text-zinc-600 dark:text-zinc-300" />
  ),
  li: (props: any) => (
      <li {...props} className="ml-4" />
  ),
  strong: (props: any) => (
    <strong {...props} className="font-extrabold text-cyan-600 dark:text-cyan-400" />
  ),
  blockquote: (props: any) => (
    <blockquote {...props} className="border-l-4 border-cyan-500 pl-4 py-2 italic bg-cyan-50/30 dark:bg-cyan-900/10 rounded-r-lg my-6 text-zinc-700 dark:text-zinc-300" />
  ),
  CardSpotlight: CardSpotlight,
  // Add more custom components here
};

export function PortfolioMDXRemote({ source }: { source: string }) {
  return (
    <MDXRemote source={source} components={components} />
  );
}
