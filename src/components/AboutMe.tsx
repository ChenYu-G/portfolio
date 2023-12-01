import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
	const pRefs = [useRef<HTMLParagraphElement>(null)]
	useLayoutEffect(() => {
		pRefs.forEach((pRef) => {
			if (!pRef.current) return
			const bg = pRef.current.dataset.bgColor
			const fg = pRef.current.dataset.fgColor

			const text = pRef.current.textContent || ''
			pRef.current.textContent = ''
			const words = text.split(' ')
			const array = []
			for (let j = 0; j < words.length; j++) {
				const word = words[j]
				const wordSpan = document.createElement('span')
				wordSpan.textContent = j < words.length - 1 ? word + '\u00A0' : word
				pRef.current.appendChild(wordSpan)
				array.push(wordSpan)
			}

			gsap.fromTo(
				array,
				{
					color: bg,
				},
				{
					color: fg,
					duration: 0.3,
					stagger: 0.02,
					scrollTrigger: {
						trigger: pRef.current,
						start: 'top 80%',
						end: 'top 20%',
						scrub: true,
						markers: false,
						toggleActions: 'play play reverse reverse',
					},
				}
			)
		})
	}, [])

	return (
		<div className='h-screen flex justify-center items-center'>
			<div className='w-3/5 text-xl leading-10'>
				<p ref={pRefs[0]} data-bg-color='#eeeeee' data-fg-color='black'>
					Hello, friends. My name is ChenYu. I'm from China and now in the
					United States right now. I'm a master's graduate in Information
					Technology and Management. I love UI/UX design, learning new and
					interesting web technologies, and exploring user experience solutions!
				</p>
			</div>
		</div>
	)
}

export default AboutMe
