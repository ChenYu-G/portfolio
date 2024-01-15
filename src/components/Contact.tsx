import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
	const h1Ref = useRef(null)
	const secRef = useRef(null)

	useEffect(() => {
		const h1Element = h1Ref.current

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: secRef.current,
				start: 'top center',
				end: 'bottom bottom',
				scrub: true,
			},
		})

		tl.fromTo(
			h1Element,
			{ opacity: 0, y: 80 },
			{ opacity: 1, y: 0, duration: 0.9 }
		)
	}, [])
	return (
		<div
			ref={secRef}
			className=' flex flex-col place-content-center h-screen w-auto'
		>
			<h1 ref={h1Ref} className='text-center text-5xl lg:text-7xl'>
				CONTACT ME
			</h1>
			<div className='text-center text-xl lg:text-2xl m-9'>
				<span>Email:</span> cgeng.charlie@gmail.com
			</div>
			<ul className='flex place-content-center text-2xl gap-5'>
				<li className=''>
					<a
						href='https://github.com/ChenYu-G'
						target='_blank'
						rel='noreferrer'
						className=''
					>
						<AiFillGithub />
					</a>
				</li>
				<li className='social-icons'>
					<a
						href='https://www.linkedin.com/in/chenyu-geng-6bb2ba241/'
						target='_blank'
						rel='noreferrer'
						className=''
					>
						<FaLinkedinIn />
					</a>
				</li>
				<li className='social-icons'>
					<a
						href='mailto:cgeng.charlie@gmail.com'
						target='_blank'
						rel='noreferrer'
						className=''
					>
						<AiOutlineMail />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Contact
