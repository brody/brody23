// import Date from './Date.astro';
import type { GardenFrontmatter } from '@content/_schemas'
import { format, parseISO } from 'date-fns'

export interface Props {
	href?: string
	frontmatter: GardenFrontmatter
	secHeading?: boolean
}
let currentYear = ''

export default function GardenItem({ href, frontmatter, secHeading = true }: Props) {
	const { title, pubDatetime, description } = frontmatter

	return (
		<div className='my-5'>
			<a href={href} className='flex flex-col !no-underline hover:text-accent'>
				{/* <div> */}
				{secHeading ? (
					<h2 className='my-0 font-body text-lg leading-[140%] text-heading hover:text-accent'>
						{title}
					</h2>
				) : (
					<h3 className=' my-0 font-body text-base leading-[140%] text-heading hover:text-accent'>
						{title}
					</h3>
				)}
				<p className='text-sm text-subtle'>{description}</p>
			</a>
		</div>
	)
}
