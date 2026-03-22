import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { CardSpotlight } from "./card-spotlight";

const components = {
  h1: (props: any) => (
    <h1
      {...props}
      className="mt-10 mb-6 text-4xl font-semibold tracking-[-0.04em] text-[#f5efe3]"
    />
  ),
  h2: (props: any) => (
    <h2
      {...props}
      className="mt-14 mb-5 border-t border-[rgba(209,153,72,0.18)] pt-6 text-3xl font-semibold tracking-[-0.035em] text-[#f5efe3]"
    />
  ),
  h3: (props: any) => (
    <h3
      {...props}
      className="mt-10 mb-4 text-2xl font-semibold tracking-[-0.03em] text-[#f5efe3]"
    />
  ),
  h4: (props: any) => (
    <h4
      {...props}
      className="mt-8 mb-3 font-mono text-sm font-semibold uppercase tracking-[0.24em] text-[#d4a35f]"
    />
  ),
  p: (props: any) => (
    <p
      {...props}
      className="mb-5 text-[1.05rem] leading-8 text-[#b9ad9b]"
    />
  ),
  ul: (props: any) => (
    <ul
      {...props}
      className="mb-6 space-y-3 pl-0 text-[#b9ad9b] marker:text-transparent"
    />
  ),
  ol: (props: any) => (
    <ol
      {...props}
      className="mb-6 space-y-4 pl-0 text-[#b9ad9b] marker:text-transparent"
    />
  ),
  li: (props: any) => (
    <li
      {...props}
      className="relative pl-7 before:absolute before:left-0 before:top-[0.8em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#d19948]"
    />
  ),
  strong: (props: any) => (
    <strong
      {...props}
      className="font-semibold text-[#f5efe3]"
    />
  ),
  a: (props: any) => (
    <a
      {...props}
      className="ui-link underline decoration-[rgba(209,153,72,0.4)] underline-offset-4 transition hover:text-[#f2c983]"
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      {...props}
      className="my-8 border-l-2 border-[#d19948] bg-[rgba(212,163,95,0.08)] px-6 py-5 text-lg italic leading-8 text-[#d7ccbc]"
    />
  ),
  code: (props: any) => (
    <code
      {...props}
      className="rounded-md border border-[#3b2f23] bg-[#15110d] px-2 py-1 font-mono text-[0.92em] text-[#f2c983]"
    />
  ),
  pre: (props: any) => (
    <pre
      {...props}
      className="my-8 overflow-x-auto rounded-[1.5rem] border border-[#3b2f23] bg-black/80 p-5 text-sm text-[#e7dccf] shadow-[0_16px_40px_rgba(0,0,0,0.24)]"
    />
  ),
  hr: (props: any) => (
    <hr
      {...props}
      className="my-10 border-0 border-t border-[rgba(209,153,72,0.16)]"
    />
  ),
  CardSpotlight,
};

export function PortfolioMDXRemote({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
