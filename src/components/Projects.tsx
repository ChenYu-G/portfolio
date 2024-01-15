import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Project from './Project'

const allProjects = [
	{
		header: 'REACT PROJECT',
		title: 'Lithings',
		description: 'A social media app, using React.js, Appwrite, React-Query',
		imageUrl_1: 'assets/lithings.png',
		imageUrl_2: 'assets/lithings_home.png',
		githubLink: 'https://github.com/ChenYu-G/littlethings',
		deployedLink: 'https://lithings.vercel.app/',
	},
	{
		header: 'REACT PROJECT',
		title: 'Travel Advisor',
		description:
			'Travel advisor app, using React, Google Map API and Rapid API',
		imageUrl_1: 'assets/travel_advisor.png',
		imageUrl_2: 'assets/travel_advisor_hotel.png',
		githubLink: 'https://github.com/ChenYu-G/travel-advisor',
		deployedLink: 'https://travel-advisor-chenyu-g.vercel.app/',
	},
	{
		header: 'REACT PROJECT',
		title: 'Restaurant UI Project',
		description: 'A Restaurant UI/UX project, using React.js',
		imageUrl_1: 'assets/rock_1.png',
		imageUrl_2: 'assets/rock_2.png',
		githubLink: 'https://github.com/ChenYu-G/Rock-Restaurant',
		deployedLink: 'https://rock-restaurant.vercel.app/',
	},
	{
		header: 'NEXT PROJECT',
		title: 'Vote your like ',
		description:
			'A full stack project, using Next.js, NextUI, MongoDB, Prisma, Clerk, etc.',
		imageUrl_1: 'assets/vote1.png',
		imageUrl_2: 'assets/vote2.png',
		githubLink: 'https://github.com/ChenYu-G/next-vote-app',
	},
	{
		header: 'WORDPRESS PROJECT',
		title: 'BigBang Artwork',
		description: 'BigBang Artwork, using WordPress',
		imageUrl_1: 'assets/ba_1.png',
		imageUrl_2: 'assets/ba_2.png',
		deployedLink: 'https://www/bigbangartwork.org/',
	},
]

const Projects = () => {
	gsap.registerPlugin(ScrollTrigger)

	const container = useRef(null)

	useLayoutEffect(() => {
		{
			gsap.context(() => {
				// const scrollTween =
				gsap.to('.pin', {
					xPercent: -100 * allProjects.length + 70,
					ease: 'none',
					scrollTrigger: {
						trigger: container.current,
						pin: true,
						scrub: 1,
						end: '+=2000',
						snap: 1 / (allProjects.length - 1),
						// markers: true,
					},
				})
				// sections.forEach((section, index) => {
				// 	// grab the scoped text
				// 	const text = anim[index]

				// 	// bump out if there's no items to animate
				// 	if (!text.current) return

				// 	// do a little stagger
				// 	gsap.from(text.current, {
				// 		opacity: 0.2,
				// 		duration: 2,
				// 		ease: 'none',
				// 		stagger: 0.1,
				// 		scrollTrigger: {
				// 			trigger: section.current,
				// 			containerAnimation: scrollTween,
				// 			start: 'top center',
				// 			// markers: true,
				// 		},
				// 	})
				// })
			}, container)
		}
	}, [])
	return (
		<div
			className='projects-section h-screen overflow-x-hidden relative'
			ref={container}
		>
			<div className='sidebar'>
				<p className='uppercase text-6xl md:text-8xl leading-12 mr-96'>
					My <br />
					Projects
				</p>
			</div>
			<div className='wrapper flex gap-10 mt-4 ml-0 absolute top-4 md:mt-0 xl:mt-32 left-96'>
				{allProjects.map((project, index) => {
					return (
						<Project
							key={index}
							header={project.header}
							title={project.title}
							description={project.description}
							imageUrl_1={project.imageUrl_1}
							imageUrl_2={project.imageUrl_2}
							githubLink={project.githubLink}
							deployedLink={project.deployedLink}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Projects
