import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Divide = () => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const sliderWrapperRef = useRef<HTMLDivElement>(null)
	const slidesRefs: React.RefObject<HTMLImageElement>[] = [
		useRef<HTMLImageElement>(null),
		useRef<HTMLImageElement>(null),
		useRef<HTMLImageElement>(null),
		useRef<HTMLImageElement>(null),
		useRef<HTMLImageElement>(null),
	]

	useLayoutEffect(() => {
		const slider = sliderRef.current
		const sliderWrapper = sliderWrapperRef.current
		const slides = slidesRefs.map((ref) => ref.current)

		let target = 0
		let current = 0
		const ease = 0.075

		if (!slider || !sliderWrapper || !slides) {
			return
		}

		let maxScroll = sliderWrapper.offsetWidth - window.innerWidth

		function lerp(start: number, end: number, factor: number): number {
			return start + (end - start) * factor
		}

		function updateScaleAndPosition(): void {
			slides.forEach((slide) => {
				if (slide) {
					const rect = slide.getBoundingClientRect()
					const centerPosition = (rect.left + rect.right) / 2
					const distanceFromCenter = centerPosition - window.innerWidth / 2

					let scale, offsetX

					if (distanceFromCenter > 0) {
						scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth)
						offsetX = (scale - 1) * 300
					} else {
						scale = Math.max(
							0.5,
							1 - Math.abs(distanceFromCenter) / window.innerWidth
						)
						offsetX = 0
					}

					gsap.set(slide, { scale, x: offsetX })
				}
			})
		}

		function update(): void {
			current = lerp(current, target, ease)

			gsap.set(sliderWrapper, {
				x: -current,
			})

			updateScaleAndPosition()
			requestAnimationFrame(update)
		}

		function handleResize(): void {
			if (!sliderWrapper) {
				return
			}
			maxScroll = sliderWrapper.offsetWidth - window.innerWidth
		}

		window.addEventListener('resize', handleResize)
		// window.addEventListener('scroll', handleScroll)

		window.addEventListener('wheel', (e) => {
			{
				target += e.deltaY
				target = Math.max(0, target)
				target = Math.min(maxScroll, target)
			}
		})

		update()
	})

	return (
		<div className='project-section h-10 overflow-hidden relative'>
			{/* <div className='sidebar-item'></div> */}
			<div ref={sliderRef} className='slider w-full h-full overflow-hidden'>
				<div ref={sliderWrapperRef} className='slider-wrapper'>
					<div className='slide' ref={slidesRefs[0]}>
						<img src='/assets/arrow.svg' alt='' />
					</div>
					<div className='slide' ref={slidesRefs[1]}>
						<img src='/assets/arrow.svg' alt='' />
					</div>
					<div className='slide' ref={slidesRefs[2]}>
						<img src='/assets/arrow.svg' alt='' />
					</div>
					<div className='slide' ref={slidesRefs[3]}>
						<img src='/assets/arrow.svg' alt='' />
					</div>
					<div className='slide' ref={slidesRefs[4]}>
						<img src='/assets/arrow.svg' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Divide
