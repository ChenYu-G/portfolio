import { Link } from 'react-router-dom'

interface TopNavProps {
	links: { to?: string; label: string; onClick?: () => void }[]
}

const TopNav: React.FC<TopNavProps> = ({ links }) => {
	return (
		<nav className='top-nav'>
			<ul className='list-none text-[12px] flex-center md:gap-20 md:text-sm text-[#0808087e]'>
				{links.map((link, index) => (
					<li key={index} className='mr-6 hover:text-[#111]'>
						<Link to={link.to || ''} onClick={link.onClick}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default TopNav
