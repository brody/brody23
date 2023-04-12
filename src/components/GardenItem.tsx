// import Date from './Date.astro';
import type { GardenFrontmatter } from '@content/_schemas';
import { format, parseISO } from 'date-fns';

export interface Props {
  href?: string;
  frontmatter: GardenFrontmatter;
  secHeading?: boolean;
}
let currentYear = '';

export default function GardenItem({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;

  return (
    <div className='my-5 not-prose'>
      <a href={href} className='flex flex-col !no-underline hover:text-accent'>
        {/* <div> */}
        {secHeading ? (
          <h2 className='my-0 text-lg text-heading hover:text-accent font-body leading-[140%]'>{title}</h2>
        ) : (
          <h3 className=' my-0 text-base text-heading hover:text-accent font-body leading-[140%]'>{title}</h3>
        )}
        <p className='text-sm text-subtle'>{description}</p>
      </a>
    </div>
  );
}
