import { Link } from 'react-router-dom'

interface TopNavProps {
	links: { to: string; label: string }[]
}

const TopNav: React.FC<TopNavProps> = ({ links }) => {
	return (
		<nav className='top-nav'>
			<ul className='list-none flex'>
				{links.map((link, index) => (
					<li key={index} className='mr-6'>
						<Link to={link.to}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default TopNav
