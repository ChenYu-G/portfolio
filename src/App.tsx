import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './globals.css'
import './colorfulbg.css'

import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import Divide from './components/Divide'
import TopNav from './components/TopNav'
import Hero from './components/Hero'

function App() {
	/** lenis set up  */
	useEffect(() => {
		const lenis = new Lenis({})
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])
	/** ***************************** */
	const contactRef = useRef<HTMLDivElement | null>(null)

	const scrollToContact = () => {
		if (contactRef.current) {
			// Using smooth scroll behavior
			contactRef.current.scrollIntoView({ behavior: 'smooth' })
		}
		console.log('hello')
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const navLinks = [
		{ label: 'Home', onClick: scrollToTop },
		// { to: '/about', label: 'About' },
		{ label: 'Contact', onClick: scrollToContact },
		{
			to: 'https://raw.githubusercontent.com/ChenYu-G/portfolio/main/public/assets/ChenYu_Geng%202024.pdf',
			label: 'Download my resume',
		},
	]

	return (
		<Router>
			<div className='colorful'>
				<TopNav links={navLinks} />
				<Hero />
				<Divide />
				<AboutMe />
				<Divide />
				<Projects />
				<div ref={contactRef}>
					<Contact />
				</div>
			</div>
		</Router>
	)
}

export default App
