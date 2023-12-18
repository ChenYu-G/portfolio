import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IoArrowForwardSharp } from 'react-icons/io5'

const Projects = () => {
	gsap.registerPlugin(ScrollTrigger)

	const container = useRef(null)
	const sections: React.RefObject<HTMLElement>[] = [
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null),
	]
	const anim: React.RefObject<HTMLHeadingElement>[] = [
		useRef<HTMLHeadingElement>(null),
		useRef<HTMLHeadingElement>(null),
		useRef<HTMLHeadingElement>(null),
	]

	useLayoutEffect(() => {
		{
			gsap.context(() => {
				const scrollTween = gsap.to('.pin', {
					xPercent: -100 * sections.length + 70,
					ease: 'none',
					scrollTrigger: {
						trigger: container.current,
						pin: true,
						scrub: 1,
						end: '+=2000',
						snap: 1 / (sections.length - 1),
						// markers: true,
					},
				})
				sections.forEach((section, index) => {
					// grab the scoped text
					const text = anim[index]

					// bump out if there's no items to animate
					if (!text.current) return

					// do a little stagger
					gsap.from(text.current, {
						opacity: 0.2,
						duration: 2,
						ease: 'none',
						stagger: 0.1,
						scrollTrigger: {
							trigger: section.current,
							containerAnimation: scrollTween,
							start: 'top center',
							// markers: true,
						},
					})
				})
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
			<div className='wrapper flex gap-10 mt-4 ml-0 absolute top-4 md:top-20 left-96'>
				{/* /project 1 Lithings */}
				<section className='pin w-screen' ref={sections[0]}>
					<span className='text-gray-400 mb-3'>REACT PROJECT</span>
					<h1 className='text-3xl md:text-5xl mb-3' ref={anim[0]}>
						Lithings
					</h1>

					<div className='flex flex-col gap-4'>
						<p className='text-sm md:text-lg'>
							A social media app, using React.js, Appwrite, React-Query
						</p>
						<div className='img-box flex flex-col md:flex-row gap-6 md:gap-6'>
							<img
								src='assets/lithings.png'
								className=' border-gray-300 border-4 w-96 border-opacity-75 rounded-xl'
								alt='lithings'
							/>
							<img
								src='assets/lithings_home.png'
								className=' border-gray-300 border-4 w-96 border-opacity-75 rounded-xl'
								alt='lithings'
							/>
						</div>
						<div className='flex gap-7'>
							<a
								className='hover:bg-gray-50 p-2'
								href='https://github.com/ChenYu-G/littlethings'
								target='_blank'
							>
								<p className='flex items-center'>
									GitHub Link
									<IoArrowForwardSharp />
								</p>
							</a>
							<a
								className='hover:bg-gray-50 p-2'
								href='https://lithings.vercel.app/'
								target='_blank'
							>
								<p className='flex items-center'>
									Project Preview
									<IoArrowForwardSharp />
								</p>
							</a>
						</div>
					</div>
				</section>
				{/* /project 2 Travel_advisor */}
				<section className='pin w-screen' ref={sections[1]}>
					<span className='text-gray-400 mb-3'>REACT PROJECT</span>
					<h1 className='text-3xl md:text-5xl mb-3' ref={anim[1]}>
						Travel Advisor
					</h1>

					<div className='col flex flex-col gap-4'>
						<p className='text-sm md:text-lg'>
							Travel advisor app, using React, Google Map API and Rapid API
						</p>
						<div className='img-box flex flex-col md:flex-row gap-6 md:gap-6'>
							<img
								src='assets/travel_advisor.png'
								className=' border-gray-300 border-4 w-96 border-opacity-75 rounded-xl'
								alt='travel_advisor'
							/>
							<img
								src='assets/travel_advisor_hotel.png'
								className=' border-gray-300 border-4 w-96 border-opacity-75 rounded-xl'
								alt='travel_advisor'
							/>
						</div>
						<div className='flex gap-7'>
							<a
								className='hover:bg-gray-50 p-2'
								href='https://github.com/ChenYu-G/travel-advisor'
								target='_blank'
							>
								<p className='flex items-center'>
									GitHub Link
									<IoArrowForwardSharp />
								</p>
							</a>
							<a
								className='hover:bg-gray-50 p-2'
								href='https://travel-advisor-chenyu-g.vercel.app/'
								target='_blank'
							>
								<p className='flex items-center'>
									Project Preview
									<IoArrowForwardSharp />
								</p>
							</a>
						</div>
					</div>
				</section>
				{/* /project 3 Restaurant UI Project */}
				<section className='pin w-screen' ref={sections[2]}>
					<span className='text-gray-400 mb-3'>REACT PROJECT</span>
					<h1 className='text-3xl md:text-5xl mb-3' ref={anim[2]}>
						Restaurant UI Project
					</h1>

					<div className='flex flex-col gap-4'>
						<p className='text-sm md:text-lg'>
							A Restaurant UI/UX project, using React.js
						</p>
						<div className='img-box flex flex-col md:flex-row gap-6 md:gap-6'>
							<img
								src='assets/rock_1.png'
								className=' border-gray-300 border-4 w-96 border-opacity-75 rounded-xl'
								alt='travel_advisor'
							/>
							<img
								src='assets/rock_2.png'
								className=' border-gray-300 border-4 w-96 border-opacity-75 rounded-xl'
								alt='travel_advisor'
							/>
						</div>
						<div className='flex gap-7'>
							<a
								className='hover:bg-gray-50 p-2'
								href='https://github.com/ChenYu-G/Rock-Restaurant'
								target='_blank'
							>
								<p className='flex items-center'>
									GitHub Link
									<IoArrowForwardSharp />
								</p>
							</a>
							<a
								className='hover:bg-gray-50 p-2'
								href='https://rock-restaurant.vercel.app/'
								target='_blank'
							>
								<p className='flex items-center'>
									Project Preview
									<IoArrowForwardSharp />
								</p>
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Projects
