import { IoArrowForwardSharp } from 'react-icons/io5'

interface ProjectProps {
	imageUrl_1: string
	imageUrl_2: string
	header: string
	title: string
	description: string
	githubLink?: string
	deployedLink?: string
}

const Project = (props: ProjectProps) => {
	return (
		<section className='pin w-screen'>
			<span className='text-gray-400 mb-3'>{props.header}</span>
			<h1 className='text-3xl md:text-5xl mb-3'>{props.title}</h1>
			<div className='col flex flex-col gap-4'>
				<p className='text-sm md:text-lg'>{props.description}</p>
				<div className='img-box flex flex-col md:flex-row gap-6 md:gap-6'>
					<img
						src={props.imageUrl_1}
						className='project-img'
						alt='project-img'
					/>
					<img
						src={props.imageUrl_2}
						className='project-img'
						alt='project-img'
					/>
				</div>
				<div className='flex gap-7'>
					{props.githubLink && (
						<a
							className='hover:bg-gray-50 p-2'
							href={props.githubLink}
							target='_blank'
						>
							<p className='flex items-center'>
								Github
								<IoArrowForwardSharp />
							</p>
						</a>
					)}
					{props.deployedLink && (
						<a
							className='hover:bg-gray-50 p-2'
							href={props.deployedLink}
							target='_blank'
						>
							<p className='flex items-center'>
								Project Preview
								<IoArrowForwardSharp />
							</p>
						</a>
					)}
				</div>
			</div>
		</section>
	)
}

export default Project
