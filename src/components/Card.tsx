// import Date from './Date.astro';
import type { BlogFrontmatter } from "@content/_schemas";
import { format, parseISO } from "date-fns";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}
let currentYear = "";

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;

  return (
    <>
      <>
        {format(new Date(pubDatetime), "yyyy") === currentYear ? (
          ""
        ) : (
          <h2 className="!text-2xl !text-accent">
            {(currentYear = format(new Date(pubDatetime), "yyyy"))}
          </h2>
        )}
      </>

      <div className="not-prose my-5">
        <a
          href={href}
          className="flex flex-row !no-underline hover:text-accent"
        >
          {/* <div> */}
          {secHeading ? (
            <h2 className="my-0 whitespace-nowrap font-body text-lg leading-[140%] text-heading hover:text-accent">
              <span className="mr-1.5 whitespace-normal">{title}</span>
              &nbsp;
              {/* <Datetime datetime={pubDatetime} /> */}
              {/* <Date date={pubDatetime} dateFormat='dd LLL' /> */}
              <span
                className={`inline-block font-code text-sm font-normal text-subtle`}
              >
                {format(new Date(pubDatetime), "dd LLL")}
              </span>
            </h2>
          ) : (
            <h3 className="my-0 whitespace-nowrap font-body text-base leading-[140%] text-heading hover:text-accent">
              <span className="mr-1.5 whitespace-normal">{title}</span>
              &nbsp;
              {/* <Datetime datetime={pubDatetime} /> */}
              {/* <Date date={pubDatetime} dateFormat='dd LLL' /> */}
              <span
                className={`inline-block font-code text-sm font-normal text-subtle`}
              >
                {format(new Date(pubDatetime), "dd LLL")}
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
