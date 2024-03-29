import type { WorkFrontmatter } from '@content/_schemas'
import { Image } from 'astro:assets'

export interface Props {
	href?: string
	frontmatter: WorkFrontmatter
}

export default function WorkCard({ href, frontmatter }: Props) {
	const { title, description, featuredImage, tags } = frontmatter
	return (
		// <>
		<div className='not-prose mb-16 mt-12'>
			<a href={href} className='flex flex-col !no-underline hover:text-accent'>
				<img src={featuredImage} alt='' className='wide mb-5' />
				{/* <Image
            src={featuredImage}
            alt="Kindle with Reinventing organizations cover"
            className="wide"
          /> */}

				<h2 className='h2 whitespace-nowrap hover:text-accent'>
					<span className='whitespace-normal'>{title}</span>
				</h2>

				<div className='mb-2 flex flex-row flex-wrap gap-2'>
					{tags.map((tags) => (
						<span className='rounded border border-default bg-subtle px-1.5 text-sm text-subtle'>
							{tags}
						</span>
					))}
				</div>

				<p className='leading-normal text-subtle'>{description}</p>
			</a>
		</div>
		// </>
	)
}
