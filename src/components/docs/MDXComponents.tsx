import Link from "next/link";

interface CustomLinkProps {
  href?: string;
  children: React.ReactNode;
}

export function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (!href) {
    return <span {...props}>{children}</span>;
  }

  // External link - open in new tab
  if (href.startsWith("http") || href.startsWith("https")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal link - use Next.js Link
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

export const mdxComponents = {
  a: CustomLink,
};
