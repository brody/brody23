// import Date from './Date.astro';
import type { BlogFrontmatter } from '@content/_schemas';
import { format, parseISO } from 'date-fns';

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}
let currentYear = '';

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;

  return (
    <>
      <>
        {format(new Date(pubDatetime), 'yyyy') === currentYear ? (
          ''
        ) : (
          <h2 className='!text-accent !text-2xl'>{(currentYear = format(new Date(pubDatetime), 'yyyy'))}</h2>
        )}
      </>

      <div className='my-5 not-prose'>
        <a href={href} className='flex flex-row !no-underline hover:text-accent'>
          {/* <div> */}
          {secHeading ? (
            <h2 className='whitespace-nowrap my-0 text-lg text-heading hover:text-accent font-body leading-[140%]'>
              <span className='whitespace-normal mr-1.5'>{title}</span>
              &nbsp;
              {/* <Datetime datetime={pubDatetime} /> */}
              {/* <Date date={pubDatetime} dateFormat='LL LLL' /> */}
              <span className={`text-subtle font-code text-sm inline-block font-normal`}>
                {format(new Date(pubDatetime), 'LL LLL')}
              </span>
            </h2>
          ) : (
            <h3 className='whitespace-nowrap my-0 text-base text-heading hover:text-accent font-body leading-[140%]'>
              <span className='whitespace-normal mr-1.5'>{title}</span>
              &nbsp;
              {/* <Datetime datetime={pubDatetime} /> */}
              {/* <Date date={pubDatetime} dateFormat='LL LLL' /> */}
              <span className={`text-subtle font-code text-sm inline-block font-normal`}>
                {format(new Date(pubDatetime), 'LL LLL')}
              </span>
            </h3>
          )}
          {/* </div> */}
        </a>
        {/* <p className='text-subtle'>{description}</p> */}
      </div>
    </>
  );
}
