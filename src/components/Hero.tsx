import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import './colorfulbg.css'
const Hero = () => {
	const pRefs: React.RefObject<HTMLParagraphElement>[] = [
		useRef<HTMLParagraphElement>(null),
		useRef<HTMLParagraphElement>(null),
		useRef<HTMLParagraphElement>(null),
		useRef<HTMLParagraphElement>(null),
		useRef<HTMLParagraphElement>(null),
	]
	const tl = gsap.timeline({ repeat: -1 })

	useLayoutEffect(() => {
		pRefs.forEach((ref) => {
			if (ref.current === null) return
			const text = ref.current.textContent || ''
			ref.current.textContent = ''
			const array = []
			for (let i = 0; i < text.length; i++) {
				const letter = document.createElement('span')
				letter.textContent = text[i] === ' ' ? '\u00A0' : text[i]
				ref.current.appendChild(letter)

				array.push(letter)
			}

			tl.from(
				array,
				{
					opacity: 0,
					y: 50,
					rotateX: -90,
					stagger: 0.05,
				},
				'<'
			).to(
				array,
				{
					opacity: 0,
					y: -50,
					rotateX: 90,
					stagger: 0.05,
				},
				'<3'
			)
		})
	}, [])
	return (
		<div className='flex flex-col h-screen justify-center'>
			<div className='blur-text pb-12'>
				<h1 className='md:text-xl text-center text-gray-600'>
					@ChenYu Geng <span>, I am</span>
				</h1>
				<div className='flex-center flex-col h-36 mt-10 text-3xl md:text-7xl lg:text-8xl'>
					<p className='same-line' ref={pRefs[0]}>
						UI/UX DESIGNER
					</p>
					<p className='same-line' ref={pRefs[1]}>
						FRONT-END DEV
					</p>
					<p className='same-line' ref={pRefs[2]}>
						CREATIVE DEV
					</p>
					<p className='same-line' ref={pRefs[3]}>
						EVOLVING CODER
					</p>
					<p className='same-line' ref={pRefs[4]}>
						TECH ENTHUSIAST
					</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
