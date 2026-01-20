import { MDXComponents } from 'mdx/types';
import { NumberBaseConverter } from '@/components/blog/NumberBaseConverter';
import { CopyCodeButton } from '@/components/blog/CopyCodeButton';

export const mdxComponents: MDXComponents = {
  // Custom components
  NumberBaseConverter,

  // Override pre to add copy button
  pre: ({ children, ...props }) => (
    <div className="relative">
      <CopyCodeButton />
      <pre {...props}>{children}</pre>
    </div>
  ),

  // You can override other HTML elements here
  // h1: ({ children }) => <h1 className="custom-h1">{children}</h1>,
  // a: ({ href, children }) => <a href={href} className="custom-link">{children}</a>,
};
