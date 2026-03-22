import Link from "next/link";

interface CustomLinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function CustomLink({ href, children, className, ...props }: CustomLinkProps) {
  if (!href) {
    return <span className={className} {...props}>{children}</span>;
  }

  const resolvedClassName =
    className ??
    "ui-link underline decoration-[rgba(212,163,95,0.4)] underline-offset-4 transition";

  // External link - open in new tab
  if (href.startsWith("http") || href.startsWith("https")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={resolvedClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal link - use Next.js Link
  return (
    <Link href={href} className={resolvedClassName} {...props}>
      {children}
    </Link>
  );
}

export const mdxComponents = {
  a: CustomLink,
};
