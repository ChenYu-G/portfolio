import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero'

import './globals.css'

import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
// import TopNav from './components/TopNav'
import Divide from './components/Divide'

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
	// const navLinks = [
	// 	{ to: '/', label: 'Home' },
	// 	{ to: '/about', label: 'About' },
	// 	{ to: '/contact', label: 'Contact' },
	// ]
	return (
		<Router>
			<div className='colorful'>
				{/* <TopNav links={navLinks} /> */}
				<Hero />
				<Divide />

				<AboutMe />
				<Divide />
				<Projects />
				<Contact />
			</div>
		</Router>
	)
}

export default App
